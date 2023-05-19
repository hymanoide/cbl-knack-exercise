"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
// Read and parse the "mock_application.json" file
var rawSchema = fs.readFileSync('mock_application.json', 'utf-8');
var schema = JSON.parse(rawSchema);
// Identify duplicate fields and objects
var fieldKeys = new Set();
var objectKeys = new Set();
var duplicates = {
    fields: [],
    objects: []
};
schema.versions.forEach(function (version) {
    version.objects.forEach(function (object) {
        if (objectKeys.has(object.key)) {
            duplicates.objects.push(object);
        }
        else {
            objectKeys.add(object.key);
        }
        object.fields.forEach(function (field) {
            if (fieldKeys.has(field.key)) {
                duplicates.fields.push(field);
            }
            else {
                fieldKeys.add(field.key);
            }
        });
    });
});
// Remove duplicate fields and objects
var sanitizedSchema = {
    versions: []
};
schema.versions.forEach(function (version) {
    var sanitizedVersion = __assign(__assign({}, version), { objects: version.objects.filter(function (object) { return !duplicates.objects.some(function (dup) { return dup.key === object.key; }); }) });
    sanitizedVersion.objects.forEach(function (object) {
        object.fields = object.fields.filter(function (field) { return !duplicates.fields.some(function (dup) { return dup.key === field.key; }); });
    });
    sanitizedSchema.versions.push(sanitizedVersion);
});
// Write the sanitized schema to "clean_application.json"
fs.writeFileSync('clean_application.json', JSON.stringify(sanitizedSchema, null, 2));
console.log('Clean application schema created: clean_application.json');
