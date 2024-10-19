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

import { NeighborsScoreNeighborWindows } from './neighborsScoreNeighborWindows';
import { Sample } from './sample';

/**
* Describes the label noise score and nearest neighbors for a single window of data in the project that shows a potential label noise issue.
*/
export class NeighborsScore {
    /**
    * The ID of the sample this window belongs to
    */
    'id': number;
    'sample'?: Sample;
    /**
    * The start time of this window in milliseconds
    */
    'windowStart': number;
    /**
    * The end time of this window in milliseconds
    */
    'windowEnd': number;
    /**
    * The label noise score for this window, from 0 to the total number of windows.
    */
    'score': number;
    /**
    * Details of the nearest neighbors to this window
    */
    'neighborWindows': Array<NeighborsScoreNeighborWindows>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "sample",
            "baseName": "sample",
            "type": "Sample"
        },
        {
            "name": "windowStart",
            "baseName": "windowStart",
            "type": "number"
        },
        {
            "name": "windowEnd",
            "baseName": "windowEnd",
            "type": "number"
        },
        {
            "name": "score",
            "baseName": "score",
            "type": "number"
        },
        {
            "name": "neighborWindows",
            "baseName": "neighborWindows",
            "type": "Array<NeighborsScoreNeighborWindows>"
        }    ];

    static getAttributeTypeMap() {
        return NeighborsScore.attributeTypeMap;
    }
}

