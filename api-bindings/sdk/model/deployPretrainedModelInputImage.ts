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

import { ImageInputScaling } from './imageInputScaling';

export class DeployPretrainedModelInputImage {
    'inputType': DeployPretrainedModelInputImageInputTypeEnum;
    'inputScaling'?: ImageInputScaling;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "inputType",
            "baseName": "inputType",
            "type": "DeployPretrainedModelInputImageInputTypeEnum"
        },
        {
            "name": "inputScaling",
            "baseName": "inputScaling",
            "type": "ImageInputScaling"
        }    ];

    static getAttributeTypeMap() {
        return DeployPretrainedModelInputImage.attributeTypeMap;
    }
}


export type DeployPretrainedModelInputImageInputTypeEnum = 'image';
export const DeployPretrainedModelInputImageInputTypeEnumValues: string[] = ['image'];