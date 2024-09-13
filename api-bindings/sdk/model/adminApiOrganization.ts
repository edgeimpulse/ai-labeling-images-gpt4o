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

import { AdminApiOrganizationAllOf } from './adminApiOrganizationAllOf';
import { Organization } from './organization';
import { OrganizationUser } from './organizationUser';
import { Project } from './project';

export class AdminApiOrganization {
    'id': number;
    /**
    * EdgeImpulse Inc.
    */
    'name': string;
    'logo'?: string;
    'headerImg'?: string;
    'showHeaderImgMask': boolean;
    'users': Array<OrganizationUser>;
    'isDeveloperProfile': boolean;
    /**
    * Unique identifier of the white label this organization belongs to, if any.
    */
    'whitelabelId': number | null;
    /**
    * Array with organizational projects
    */
    'projects': Array<Project>;
    /**
    * Unique identifier of the trial this organization belongs to, if any.
    */
    'trialId': number | null;
    /**
    * Date when the trial expired, if any. A expired trial has a grace period of 30 days before it\'s associated organization is deleted.
    */
    'trialExpiredDate': Date | null;
    /**
    * Date when the trial was upgraded to a full enterprise account, if any.
    */
    'trialUpgradedDate': Date | null;
    /**
    * Date when the organization was created.
    */
    'created': Date;
    /**
    * Date when the current contract started, if any.
    */
    'contractStartDate'?: Date | null;
    /**
    * The date in which the organization was deleted. If the organization is not deleted, this field is not set.
    */
    'deletedDate'?: Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "logo",
            "baseName": "logo",
            "type": "string"
        },
        {
            "name": "headerImg",
            "baseName": "headerImg",
            "type": "string"
        },
        {
            "name": "showHeaderImgMask",
            "baseName": "showHeaderImgMask",
            "type": "boolean"
        },
        {
            "name": "users",
            "baseName": "users",
            "type": "Array<OrganizationUser>"
        },
        {
            "name": "isDeveloperProfile",
            "baseName": "isDeveloperProfile",
            "type": "boolean"
        },
        {
            "name": "whitelabelId",
            "baseName": "whitelabelId",
            "type": "number"
        },
        {
            "name": "projects",
            "baseName": "projects",
            "type": "Array<Project>"
        },
        {
            "name": "trialId",
            "baseName": "trialId",
            "type": "number"
        },
        {
            "name": "trialExpiredDate",
            "baseName": "trialExpiredDate",
            "type": "Date"
        },
        {
            "name": "trialUpgradedDate",
            "baseName": "trialUpgradedDate",
            "type": "Date"
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "Date"
        },
        {
            "name": "contractStartDate",
            "baseName": "contractStartDate",
            "type": "Date"
        },
        {
            "name": "deletedDate",
            "baseName": "deletedDate",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return AdminApiOrganization.attributeTypeMap;
    }
}
