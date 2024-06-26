> [!CAUTION]
> CrowdStrike currently does not have a maintainer for their official git repo. This is a fork exists purely because I needed a functional solution using this language. My hope is these changes will be merged upstream at some point. Use at your own risk.

# falconjs

[![Version](https://img.shields.io/npm/v/@clburlison/crowdstrike-falcon.svg)](https://www.npmjs.com/package/@clburlison/crowdstrike-falcon)
[![Build](https://github.com/clburlison/falconjs/actions/workflows/sanity_check.yaml/badge.svg)](https://github.com/clburlison/falconjs/actions/workflows/sanity_check.yaml)
[![Maintenance](https://img.shields.io/maintenance/yes/2023.svg)](https://github.com/clburlison/falconjs/graphs/commit-activity)
[![License](https://img.shields.io/github/license/clburlison/falconjs.svg)](https://github.com/clburlison/falconjs/blob/main/LICENSE)

[![NPM](https://nodei.co/npm/@clburlison/crowdstrike-falcon.png?mini=true)](https://npmjs.org/package/@clburlison/crowdstrike-falcon)

CrowdStrike Falcon API JS library for the browser and Node

## Experimental

> falconjs is an open source project, not a CrowdStrike product. As such it carries no formal support, expressed or implied.

## Installation

```
npm install @clburlison/crowdstrike-falcon
```

## Exemplary use

```typescript
import { FalconClient, FalconErrorExplain } from "crowdstrike-falcon";

const client = new FalconClient({
    cloud: "us-1",
    clientId: "",
    clientSecret: "",
});

await client.sensorDownload
    .getSensorInstallersCCIDByQuery()
    .catch(async function (err) {
        alert("Could not fetch CCID: " + (await FalconErrorExplain(err)));
    })
    .then((value) => {
        console.log("my CCID: ", value);
    });
```

## Documentation

-   [Example usage under nodejs](examples/node/README.md)
-   [Example usage inside browser](examples/browser/README.md)

-   [SDK Developer documentation](docs/devel.md)
