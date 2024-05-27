const screenConfig = {
    DeviceWidthObject: {
        MobileSmall      : { max: 320, min: 0 },
        MobileMedium     : { max: 375, min: 321 },
        MobileLarge      : { max: 767, min: 376 },
        Tablet           : { max: 991, min: 768 },
        LaptopSmall      : { max: 1024, min: 992 },
        LaptopLarge      : { max: 1440, min: 1025 },
        LargerThanLaptop : { max: 2560, min: 1441 },
        LargeScreenMax   : { max: 999999, min: 2561 }
    },
    IdDeviceBreakpointsByWidth: {
        laptop_max : 1440,
        laptop_min : 992,
        tablet_min : 768,
        tablet_max : 991,
        mobile_max : 767,
        default_min : 768 // Unrecognized device
    },
    IdMobileHeight: {
        mobileLandscape_min : 320,
        mobileLandscape_max : 425
    }
};

const verbiage = {
    climbing: {
        title: "Climbing",
        desc: "Outside of work, climbing outdoors is my passion. I take every opportunity to head outdoors and have a vertical adventure. My favorite area to climb is Yosemite Valley and have made many notable ascents there including El Capitan via The Nose in 19 hours."
    },
    coding: {
        title: "Coding",
        desc: "My favorite personal coding project is a scraper I built in order to more effectively reserve campsites in Yosemite Valley. My first iteration was a 150 line python script that scraped Upper Pines, Lower Pines, and North Pines in Yosemite. Today it's written in Node.js and generalized across all of recreation.gov and reserveca."
    },
    education: {
        title: "Education",
        desc: "I went back to school while working fulltime for the railroad with a focus on Software Engineering and Mathematics. I received a 'Certificate of Achievement in Programming: Java' and subsequently my 'Associates of Science in Computer Science with Honors' from the City College of San Francisco. After which I did an joint intership at Salesforce and Deloitte for Software Development."
    },
    home: {
        title: "Welcome",
        intro_right: "I am a Software Engineer living in San Francisco California. When I'm not working or coding, my passion in life is rock climbing."
    },
    work: {
        title: "Work",
        desc: "Once I received my AS in CS I started contracting as a Software Developer/Salesforce Consultant for a small consultancy called PixelTag. Within a month I was offered a fulltime position as a Junior Developer, subsequently was promoted to a Software Developer, and 2.5 years after I started -- a Senior Software Developer.",
        desc2: "After I started to feel I wasn't learning anymore, I decided to focus on the parts of the job I loved and look for a position without the parts I didn't. I started at Metrum Research Group which was all the coding and challenge I loved, but without the consulting and Salesforce which I didn't.",
    }
}

exports.screenConfig = screenConfig;
exports.verbiage = verbiage;