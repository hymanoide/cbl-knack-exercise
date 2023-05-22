
/**
 * Sanitizing exercise for Knack
 *
 * @author Cesar Benítez <cesar.beni@email.com>
 *
 * The purpose of this coding exercise is to create a Node.js application that can programmatically
 * remove all duplicate fields and objects from the given mock application schema and output a new
 * sanitized version.
 */

import * as fs from 'fs';
import {Schema} from "./interfaces";
import {getDistinctObjects} from "./helpers";
import path from "path";

// console.log('Sanitation process started');

// Read and parse the "mock_application.json" file
const rawSchema = fs.readFileSync(path.resolve(__dirname, './data/mock_application.json'), 'utf-8');
const schema: Schema = JSON.parse(rawSchema);

// (schema) ? console.log('JSON parsed') : console.log("Can't parse JSON");

try {
    // Iterate over all versions
    schema.versions.forEach(version => {
        // Get distinct of parent object/scenes
        let distinctObjects = getDistinctObjects(version.objects, 'key');
        let distinctScenes = getDistinctObjects(version.scenes, 'key');
        // Get distinct fields for each distinct object.
        distinctObjects.forEach(object => {
            object.fields = getDistinctObjects(object.fields, 'key');
        });
        // Get distinct view for each distinct scene object.
        distinctScenes.forEach(scene => {
            scene.views = getDistinctObjects(scene.views, 'key')
        });
        // Replace the original Schema with new one that is sanitized.
        // Decided to replace the same Schema object due memory usage, instead of creating a new one.
        // If we'd need to save these duplicates probably I'll decide to save original data.
        version.objects = distinctObjects;
        version.scenes = distinctScenes;
    });


    // Write the sanitized schema to "sanitized_application.json"
    fs.writeFileSync(path.resolve(__dirname, './data/clean_application.json'), JSON.stringify(schema, null, 2));
    // console.log('Schema sanitized: sanitized_application.json');

} catch (e: any) {
    console.log('An error ocurred. Error:' + e.name);
    console.log(e.message);

} finally {
    console.log('Sanitization process finished');
}

