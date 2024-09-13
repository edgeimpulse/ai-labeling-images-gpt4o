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


/**
* If `remoteMgmtMode` is set to `inference` this object shows information about the model that\'s ran on device.
*/
export class DeviceInferenceInfo {
    'projectId': number;
    'projectOwner': string;
    'projectName': string;
    'deployedVersion': number;
    'modelType'?: DeviceInferenceInfoModelTypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "projectId",
            "baseName": "projectId",
            "type": "number"
        },
        {
            "name": "projectOwner",
            "baseName": "projectOwner",
            "type": "string"
        },
        {
            "name": "projectName",
            "baseName": "projectName",
            "type": "string"
        },
        {
            "name": "deployedVersion",
            "baseName": "deployedVersion",
            "type": "number"
        },
        {
            "name": "modelType",
            "baseName": "modelType",
            "type": "DeviceInferenceInfoModelTypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return DeviceInferenceInfo.attributeTypeMap;
    }
}


export type DeviceInferenceInfoModelTypeEnum = 'classification' | 'objectDetection' | 'constrainedObjectDetection';
export const DeviceInferenceInfoModelTypeEnumValues: string[] = ['classification', 'objectDetection', 'constrainedObjectDetection'];