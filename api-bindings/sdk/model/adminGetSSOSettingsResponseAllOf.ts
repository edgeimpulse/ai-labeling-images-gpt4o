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

import { AdminGetSSOSettingsResponseAllOfSsoWhitelist } from './adminGetSSOSettingsResponseAllOfSsoWhitelist';

export class AdminGetSSOSettingsResponseAllOf {
    'ssoWhitelist': Array<AdminGetSSOSettingsResponseAllOfSsoWhitelist>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "ssoWhitelist",
            "baseName": "ssoWhitelist",
            "type": "Array<AdminGetSSOSettingsResponseAllOfSsoWhitelist>"
        }    ];

    static getAttributeTypeMap() {
        return AdminGetSSOSettingsResponseAllOf.attributeTypeMap;
    }
}

