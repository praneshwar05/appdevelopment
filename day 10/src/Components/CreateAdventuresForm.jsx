import React, { useState, useEffect } from 'react';
import { Form, Button, Dropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  createAdventure,
  setErrorMessage,
  resetCreationError,
} from '../redux/slice/adventureSlice';

// CreateAdventuresForm component for adding adventures
function CreateAdventuresForm() {
  // State variables for categories and selected category
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  // const [errorMessage, setErrorMessage] = useState("");
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, creationSuccess, creationError } = useSelector(
    (store) => store.adventures,
  );
  // Update state on successful login}

  // State variable for form data (name, selected picture, description)
  const [formData, setFormData] = useState({
    name: '',
    selectedPicture: '',
    description: '',
  });

  // Event handler for adventure name input
  const handleAdventureNameChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Event handler for adventure description input
  const handleAdventureDescriptionChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // navigate to adventures index page on successful new adventure creation
  useEffect(() => {
    if (creationSuccess) navigate('/');
  }, [creationSuccess, navigate]);

  // Effect to update form data when selectedCategory changes
  useEffect(() => {
    if (selectedCategory) {
      setFormData({
        name: selectedCategory.name,
        selectedPicture: selectedCategory.image_url,
        description: selectedCategory.description,
      });
    }
  }, [selectedCategory]);

  // Form submission handler (not yet implemented)
  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      if (!selectedCategory) {
        const errorMessage = 'You need to select an adventure category first.';
        dispatch(setErrorMessage(errorMessage));
        return; // Return early to prevent form submission
      }
      dispatch(createAdventure({ formData, user }));
    } catch (error) {
      // Handle the error and display the message to the user
      setErrorMessage(error.message);
    }
  };

  // Effect to load adventure categories data from a JSON file
  useEffect(() => {
    fetch('./adventure_categories.json')
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => error);
  }, []);

  useEffect(() => {
    dispatch(resetCreationError());
  }, [selectedCategory, dispatch]);

  // JSX rendering for the component
  return (
    <>
      <div
        className="container-fluid d-flex justify-content-center align-items-center" // Add this style
      >
        <Form
          onSubmit={handleSubmit}
          className="container justify-content-center"
        >
          {/* Form title */}
          <Form.Label
            className="text-center container"
            style={{
              backgroundColor: '#fff',
              color: '#97bf0f',
              borderColor: '#d35504',
              fontSize: '3rem',
              lineHeight: '100%',
              marginTop: '-80%',
              marginBottom: '2rem',
            }}
          >
            Add Adventures
          </Form.Label>
          <Form.Label>
            <p style={{ color: 'red' }}>{creationError && error}</p>
            <p style={{ color: 'red' }}>{!selectedCategory && error}</p>
          </Form.Label>

          {/* Adventure name input */}
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              name="name"
              placeholder="Adventure name (Optional)"
              value={formData.name}
              onChange={handleAdventureNameChange}
              style={{
                backgroundColor: '#fff',
                fontWeight: '600',
                borderColor: '#97bf0f',
                fontSize: '1.3rem',
              }}
            />
          </Form.Group>

          {/* Dropdown for selecting adventure category */}
          <Form.Group className="mb-3">
            <Dropdown>
              <Dropdown.Toggle
                className="container d-flex justify-content-between"
                style={{
                  backgroundColor: '#fff',
                  color: 'inherit',
                  fontWeight: '600',
                  borderColor: '#97bf0f',
                  fontSize: '1.3rem',
                }}
                varient="primary"
                id="dropdown-basic"
              >
                <span>
                  {selectedCategory
                    ? selectedCategory.name
                    : 'Select an Adventure'}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {selectedCategory && (
                    <img
                      style={{ marginLeft: '1rem' }}
                      src={selectedCategory.image_url}
                      alt={selectedCategory.name}
                    />
                  )}
                </span>
              </Dropdown.Toggle>
              <Dropdown.Menu
                className="container"
                style={{
                  backgroundColor: '#fff',
                  color: 'black',
                  fontWeight: '600',
                  borderColor: '#97bf0f',
                  fontSize: '1.3rem',
                }}
              >
                {/* Map adventure categories as dropdown options */}
                {categories.map((category) => (
                  <Dropdown.Item
                    key={category.name}
                    onClick={() => setSelectedCategory(category)}
                  >
                    <img src={category.image_url} alt={category.image_alt} />
                    &nbsp;
                    {category.name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Form.Group>

          {/* Adventure description input */}
          <Form.Group className="mb-3">
            <Form.Control
              as="textarea"
              rows={4}
              name="description"
              placeholder="Few descriptions (Optional)"
              value={formData.description}
              onChange={handleAdventureDescriptionChange}
              style={{
                backgroundColor: '#fff',
                color: 'dark-gray',
                fontWeight: '600',
                borderColor: '#97bf0f',
                fontSize: '1.3rem',
              }}
            />
          </Form.Group>

          {/* Submit button */}
          <Button
            className="container"
            type="submit"
            variant="primary"
            style={{
              borderColor: '#d35504',
              color: '#fff',
              backgroundColor: '#97bf0f',
              fontSize: '2.3rem',
            }}
          >
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

export default CreateAdventuresForm;
