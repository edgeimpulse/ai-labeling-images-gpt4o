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

import { Impulse } from './impulse';

export class GetAllImpulsesResponseAllOf {
    'impulses': Array<Impulse>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "impulses",
            "baseName": "impulses",
            "type": "Array<Impulse>"
        }    ];

    static getAttributeTypeMap() {
        return GetAllImpulsesResponseAllOf.attributeTypeMap;
    }
}
