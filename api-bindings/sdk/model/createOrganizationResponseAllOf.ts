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


export class CreateOrganizationResponseAllOf {
    /**
    * Organization ID for the new organization
    */
    'id': number;
    /**
    * API key for the new organization (this is shown only once)
    */
    'apiKey': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "apiKey",
            "baseName": "apiKey",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CreateOrganizationResponseAllOf.attributeTypeMap;
    }
}

