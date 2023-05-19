import * as fs from 'fs';
import path from 'path';

describe('Schema Sanitizer', () => {
    const mockApplicationPath = path.resolve(__dirname, '../src/data/mock_application.json');
    const sanitizedApplicationPath = path.resolve(__dirname, '../src/data/clean_application.json');

    beforeAll(() => {
        // Run the Node.js application to sanitize the schema
        require('../src/index');

        // Wait for the file to be written
        while (!fs.existsSync(sanitizedApplicationPath)) {
            // Wait for 100ms before checking again
            jest.advanceTimersByTime(100);
        }
    });

    it('should create a sanitized application schema', () => {
        // Check if the "sanitized_application.json" file exists
        const sanitizedSchemaExists = fs.existsSync(sanitizedApplicationPath);
        expect(sanitizedSchemaExists).toBe(true);
    });

    it('should remove duplicate fields and objects', () => {
        // Read the original and sanitized schema files
        const rawMockSchema = fs.readFileSync(mockApplicationPath, 'utf-8');
        const rawSanitizedSchema = fs.readFileSync(sanitizedApplicationPath, 'utf-8');
        const mockSchema = JSON.parse(rawMockSchema);
        const sanitizedSchema = JSON.parse(rawSanitizedSchema);

        // TODO: use mockSchema and sanitizedSchema
        // ... Additional assertions to verify the sanitization process  ...
    });

    afterAll(() => {
        // Uncomment next line to remove the "clean_application.json" file when finished testing
        // fs.unlinkSync(sanitizedApplicationPath);
    });
});
