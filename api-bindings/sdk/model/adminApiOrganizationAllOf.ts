/**
 * Edge Impulse API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Project } from './project';

export class AdminApiOrganizationAllOf {
    /**
    * Array with organizational projects
    */
    'projects': Array<Project>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "projects",
            "baseName": "projects",
            "type": "Array<Project>"
        }    ];

    static getAttributeTypeMap() {
        return AdminApiOrganizationAllOf.attributeTypeMap;
    }
}

