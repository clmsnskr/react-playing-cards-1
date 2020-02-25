import React from 'react';

const makeGraphic = (props, svg) => {
    return (
        <React.Fragment>
            <svg {...props} viewBox="0 0 512 512" >
                {svg}
            </svg>
        </React.Fragment>
    )
}

export default function SuitSymbol(props) {
    let c = `#000`;
    let s = `S`;
    const { color, suit } = props;
    if (color) c = color
    if (suit) s = suit

    switch (s) {

        case `S`:
            return makeGraphic(props, <path fill={c} d="M256.264337,467 C255.276921,466.344309 254.579922,465.997178 253.427938,465.254704 C179.894534,418.488476 94.1346058,327.260583 85.3446729,213.536689 C81.1433174,159.442145 115.877105,121.990593 160.785143,121.170978 C189.44923,120.659925 212.498603,130.794214 224.976822,150.175682 C235.354364,166.288335 237.997152,191.127469 239.681567,179.652869 C245.731906,135.866181 227.338875,93.7765757 217.367916,57 C228.471498,61.0209313 242.42116,63.0458608 256.419225,63.0940734 L256.641878,63.0940734 C270.610901,63.0458608 284.531522,61.0209313 295.625424,57 C285.683506,93.7765757 267.309836,135.866181 273.340814,179.652869 C275.015548,191.127469 277.668017,166.288335 288.026198,150.175682 C300.485056,130.794214 323.55379,120.659925 352.198516,121.170978 C397.106554,121.990593 431.840341,159.442145 427.658347,213.536689 C418.868414,327.260583 333.079444,418.488476 259.633166,465.254704 C258.82,465.842897 258.11332,466.218956 256.961336,467 L256.264337,467 Z"></path>
            )

        case `D`:
            return makeGraphic(props, <path fill={c} d="M435,256.101698 C360.960997,310.306846 301.400418,379.980293 256.257641,465 C210.76124,379.980293 151.008692,310.306846 77,256.101698 C151.008692,202.130456 210.76124,132.375651 256.257641,47 C301.400418,132.375651 360.960997,202.130456 435,256.101698 Z"></path>
            )

        case `C`:
            return makeGraphic(props, <path fill={c} d="M255.995146,49 C210.763413,49 174.055711,90.3592512 174.055711,141.315247 C174.055711,170.445448 186.191291,196.292552 204.821833,213.349115 C211.112917,219.118817 208.423673,225.364472 202.016087,221.469437 C190.36593,214.378725 177.230378,209.881465 163.046313,209.881465 C119.406768,209.881465 84,249.774007 84,298.913615 C84,348.07265 119.406768,387.965192 163.046313,387.965192 C192.113454,387.965192 217.578754,370.267551 231.248271,343.857076 C232.588039,341.273337 233.665679,337.72798 235.558829,337.72798 C238.141281,337.72798 239.364547,341.972695 239.364547,349.927891 C239.364547,381.855523 227.102757,419.1449 208.996472,462 C216.821494,460.135046 240.519854,455.414379 255.995146,455.414379 C271.489854,455.414379 295.178506,460.135046 303.013236,462 C284.887534,419.1449 272.635453,381.855523 272.635453,349.927891 C272.635453,341.972695 273.858719,337.72798 276.441171,337.72798 C278.334321,337.72798 279.411961,341.273337 280.74202,343.857076 C294.411537,370.267551 319.86713,387.965192 348.953687,387.965192 C392.593232,387.965192 428,348.07265 428,298.913615 C428,249.774007 392.593232,209.881465 348.953687,209.881465 C334.769622,209.881465 321.624361,214.378725 309.983913,221.469437 C303.566619,225.364472 300.877374,219.118817 307.168459,213.349115 C325.789292,196.292552 337.934581,170.445448 337.934581,141.315247 C337.934581,90.3592512 301.236587,49 255.995146,49"></path>)

        case `H`:
            return makeGraphic(props, <path fill={c} d="M347.97423,74.2989484 C319.101343,65.3594106 274.241448,81.0867174 257.773071,146.37859 C256.384506,149.952558 254.931142,149.878677 253.635148,146.249299 C229.844407,80.098566 190.631342,65.6549325 163.072962,74.2989484 C122.249162,87.4404385 89.1735522,135.998383 92.191366,197.974869 C93.0059906,306.117418 190.011116,360.576566 255.532853,464 C320.999048,360.576566 419.096511,306.274414 419.401995,197.651642 C425.048825,135.037936 389.899625,87.1910919 347.97423,74.2989484"></path>)

        default: {
            return null
        }
    }
}


