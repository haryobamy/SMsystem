import axios from 'axios';
import fs from 'fs';

describe('Petstore API Tests', () => {
    const apiUrl = 'https://petstore.swagger.io/v2';

    // Test to get a specific pet by ID
    test('Get Pet by ID', async() => {
        const petId = 1;
        const response = await axios.get(`${apiUrl}/pet/${petId}`);
        expect(response.status).toBe(200);
        expect(response.data.id).toBe(petId);
    });

    // Test to add a new pet
    test('Add New Pet', async() => {
        const newPet = {
            id: 9999,
            name: 'Fluffy',
            status: 'available',
        };
        const response = await axios.post(`${apiUrl}/pet`, newPet);
        expect(response.status).toBe(200);
        expect(response.data.name).toBe(newPet.name);
    });

    // Test to update an existing pet
    test('Update Existing Pet', async() => {
        const petId = 9999;
        const updatedPet = {
            id: petId,
            name: 'Fluffy',
            status: 'sold',
        };
        const response = await axios.put(`${apiUrl}/pet`, updatedPet);
        expect(response.status).toBe(200);
        expect(response.data.status).toBe(updatedPet.status);
    });

    // Test to find pets by status
    test('Find Pets by Status', async() => {
        const status = 'available';
        const response = await axios.get(
            `${apiUrl}/pet/findByStatus?status=${status}`
        );
        expect(response.status).toBe(200);
        expect(response.data).toHaveLength(1); // Assuming there is at least one available pet
        expect(response.data[0].status).toBe(status);
    });

    // Test to delete a pet
    test('Delete Pet', async() => {
        const petId = 9999;
        const response = await axios.delete(`${apiUrl}/pet/${petId}`);
        expect(response.status).toBe(200);
    });

    // Test to upload a pet image
    test('Upload Pet Image', async() => {
        const petId = 1; // Assuming there's a pet with ID 1
        const imageFile = './assets/react.svg'; // Path to the image file
        const formData = new FormData();
        formData.append('file', fs.createReadStream(imageFile));
        const response = await axios.post(
            `${apiUrl}/pet/${petId}/uploadImage`,
            formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }
        );
        expect(response.status).toBe(200);
        expect(response.data.code).toBe(200);
    });
});