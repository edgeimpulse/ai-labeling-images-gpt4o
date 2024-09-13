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

import { ClassifyJobResponseAllOfAccuracy } from './classifyJobResponseAllOfAccuracy';
import { ClassifyJobResponseAllOfAdditionalMetricsByLearnBlock } from './classifyJobResponseAllOfAdditionalMetricsByLearnBlock';
import { KerasModelVariantEnum } from './kerasModelVariantEnum';
import { ModelPrediction } from './modelPrediction';
import { ModelResult } from './modelResult';

export class ClassifyJobResponseAllOf {
    'result': Array<ModelResult>;
    'predictions': Array<ModelPrediction>;
    'accuracy': ClassifyJobResponseAllOfAccuracy;
    'additionalMetricsByLearnBlock': Array<ClassifyJobResponseAllOfAdditionalMetricsByLearnBlock>;
    /**
    * List of all model variants for which classification results exist
    */
    'availableVariants': Array<KerasModelVariantEnum>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "result",
            "baseName": "result",
            "type": "Array<ModelResult>"
        },
        {
            "name": "predictions",
            "baseName": "predictions",
            "type": "Array<ModelPrediction>"
        },
        {
            "name": "accuracy",
            "baseName": "accuracy",
            "type": "ClassifyJobResponseAllOfAccuracy"
        },
        {
            "name": "additionalMetricsByLearnBlock",
            "baseName": "additionalMetricsByLearnBlock",
            "type": "Array<ClassifyJobResponseAllOfAdditionalMetricsByLearnBlock>"
        },
        {
            "name": "availableVariants",
            "baseName": "availableVariants",
            "type": "Array<KerasModelVariantEnum>"
        }    ];

    static getAttributeTypeMap() {
        return ClassifyJobResponseAllOf.attributeTypeMap;
    }
}
