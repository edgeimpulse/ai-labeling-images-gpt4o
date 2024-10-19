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

import { AdminGetOrganizationsResponseAllOfOrganizations } from './adminGetOrganizationsResponseAllOfOrganizations';

export class AdminGetOrganizationsResponseAllOf {
    'total': number;
    /**
    * Array with organizations
    */
    'organizations': Array<AdminGetOrganizationsResponseAllOfOrganizations>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "total",
            "baseName": "total",
            "type": "number"
        },
        {
            "name": "organizations",
            "baseName": "organizations",
            "type": "Array<AdminGetOrganizationsResponseAllOfOrganizations>"
        }    ];

    static getAttributeTypeMap() {
        return AdminGetOrganizationsResponseAllOf.attributeTypeMap;
    }
}

