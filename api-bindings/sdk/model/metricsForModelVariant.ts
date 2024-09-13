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

import { KerasModelVariantEnum } from './kerasModelVariantEnum';

export class MetricsForModelVariant {
    'variant': KerasModelVariantEnum;
    /**
    * The overall accuracy for the given model variant
    */
    'accuracy'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "variant",
            "baseName": "variant",
            "type": "KerasModelVariantEnum"
        },
        {
            "name": "accuracy",
            "baseName": "accuracy",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return MetricsForModelVariant.attributeTypeMap;
    }
}
