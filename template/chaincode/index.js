/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const FasteNetwork = require('./lib/contracts').FasteNetwork;
const Provenance = require('./lib/contracts').Provenance;

module.exports.FasteNetwork = FasteNetwork;
module.exports.Provenance = Provenance;

module.exports.contracts = [ FasteNetwork, Provenance ];
