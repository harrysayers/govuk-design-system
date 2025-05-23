---
title: Changes to the Design System to meet WCAG 2.2
description: Outlines the work done to improve the accessibility of the GOV.UK Design System to meet WCAG 2.2 guidelines.
section: Accessibility
layout: layout-pane.njk
showPageNav: true
order: 2
---

{% from "govuk/components/table/macro.njk" import govukTable %}

W3C owns and manages the [Web Content Accessibility Guidelines (WCAG) 2.2](https://www.w3.org/TR/WCAG22/).

In 2023, the Design System team assessed and updated the GOV.UK Design System to comply with the new criteria and recommendations given in WCAG 2.2.

We [included code changes in GOV.UK Frontend v5.0.0](https://frontend.design-system.service.gov.uk/changes-to-govuk-frontend-v5/) to make it easier for services to make changes to comply with WCAG 2.2. We also added guidance to make teams aware of the changes and help them make necessary adjustments to their services.

## Make sure your service meets the new WCAG 2.2 criteria

WCAG 2.2 was published in October 2023. You’ll need to comply with the new criteria no later than October 2024. See more about [Meeting government accessibility requirements](https://www.gov.uk/service-manual/helping-people-to-use-your-service/understanding-wcag) in the GOV.UK Service Manual.

## What you need to do

1. Revisit the [Government Digital Service (GDS) guidance on what accessibility is and why your service needs to invest in it](https://www.gov.uk/guidance/accessibility-requirements-for-public-sector-websites-and-apps)
2. Read [What’s new in WCAG 2.2](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/) to understand the new criteria your service will need to comply with
3. Ask your wider organisation for support to prepare for work needed to meet WCAG 2.2
4. [Update your service to use GOV.UK Frontend v5.0.0 or later](https://frontend.design-system.service.gov.uk/changes-to-govuk-frontend-v5/), to make it easier to make changes in your service
5. Review the lists on this page of affected components and patterns in the Design System
6. Assess your service to see how many affected components and patterns are in use
7. Plan and implement the changes needed to your service

Make sure there's expertise within your organisation by advocating for people to receive training in accessibility. To provide some help with this, the Design System team is [organising community events](/community/) to help service teams share information with each other.

## Components and patterns affected in the Design System

We've made changes to these components and patterns to comply with WCAG 2.2 level AA. You must check if your service needs amending to align with these changes.

See an [explanation of every success criteria in WCAG 2.2](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/) on the W3C website.

In June 2025, the Design System started to retire the WCAG 2.2 labels in our components and patterns, bringing the WCAG 2.2-specific messages into our overall guidance where it's useful.

{{ govukTable({
  caption: "Components",
  captionClasses: "govuk-table__caption--m",
  head: [
    {
      text: "Component",
      classes: "govuk-!-width-one-half"
    },
    {
      text: "Relevant WCAG 2.2 criteria",
      classes: "govuk-!-width-one-half"
    }
  ],
  rows: [
    [
      {
        html: '<a href="/components/button/">Button component</a>'
      },
      {
        html: 'Target size (minimum)'
      }
    ],
    [
      {
        html: '<a href="/components/error-message/">Error message component</a>'
      },
      {
        html: 'Redundant entry'
      }
    ],
    [
      {
        html: '<a href="/components/file-upload/">File upload component</a>'
      },
      {
        html: 'Dragging movements<br>Redundant entry'
      }
    ],
    [
      {
        html: '<a href="/components/phase-banner/">Phase banner component</a>'
      },
      {
        html: 'Focus not obscured (minimum)'
      }
    ],
    [
      {
        html: '<a href="/components/select/">Select component</a>'
      },
      {
        html: 'Dragging movements'
      }
    ],
    [
      {
        html: '<a href="/components/summary-list/">Summary list component</a>'
      },
      {
        html: 'Redundant entry<br>Target size (minimum)'
      }
    ],
    [
      {
        html: '<a href="/components/tag/">Tag component</a>'
      },
      {
        html: 'Dragging movements'
      }
    ]
  ]
}) }}

{{ govukTable({
  caption: "Patterns to ask users for information",
  captionClasses: "govuk-table__caption--m",
  head: [
    {
      text: "Ask users for...",
      classes: "govuk-!-width-one-half"
    },
    {
      text: "Relevant WCAG 2.2 criteria",
      classes: "govuk-!-width-one-half"
    }
  ],
  rows: [
    [
      {
        html: '<a href="/patterns/addresses/">Addresses pattern</a>'
      },
      {
        html: 'Redundant entry'
      }
    ],
    [
      {
        html: '<a href="/patterns/bank-details/">Bank details pattern</a>'
      },
      {
        html: 'Redundant entry'
      }
    ],
    [
      {
        html: '<a href="/patterns/email-addresses/">Email addresses pattern</a>'
      },
      {
        html: 'Redundant entry'
      }
    ],
    [
      {
        html: '<a href="/patterns/equality-information/">Equality information pattern</a>'
      },
      {
        html: 'Redundant entry'
      }
    ],
    [
      {
        html: '<a href="/patterns/names/">Names pattern</a>'
      },
      {
        html: 'Redundant entry'
      }
    ],
    [
      {
        html: '<a href="/patterns/national-insurance-numbers/">National Insurance Numbers pattern</a>'
      },
      {
        html: 'Redundant entry'
      }
    ],
    [
      {
        html: '<a href="/patterns/passwords/">Passwords pattern</a>'
      },
      {
        html: 'Accessible authentication<br>Consistent help<br>Target size (minimum)'
      }
    ],
    [
      {
        html: '<a href="/patterns/payment-card-details/">Payment card details pattern</a>'
      },
      {
        html: 'Target size (minimum)'
      }
    ]
  ]
}) }}

{{ govukTable({
  caption: "Patterns to help users do things",
  captionClasses: "govuk-table__caption--m",
  head: [
    {
      text: "Help users to...",
      classes: "govuk-!-width-one-half"
    },
    {
      text: "Relevant WCAG 2.2 criteria",
      classes: "govuk-!-width-one-half"
    }
  ],
  rows: [
    [
      {
        html: '<a href="/patterns/check-a-service-is-suitable/">Check a service is suitable pattern</a>'
      },
      {
        html: 'Redundant entry'
      }
    ],
    [
      {
        html: '<a href="/patterns/check-answers/">Check answers pattern</a>'
      },
      {
        html: 'Redundant entry'
      }
    ],
    [
      {
        html: '<a href="/patterns/complete-multiple-tasks/">Complete multiple tasks pattern</a>'
      },
      {
        html: 'Dragging movements<br>Redundant entry'
      }
    ],
    [
      {
        html: '<a href="/patterns/confirm-a-phone-number/">Confirm a phone number pattern</a>'
      },
      {
        html: 'Consistent help'
      }
    ],
    [
      {
        html: '<a href="/patterns/confirm-an-email-address/">Confirm an email address pattern</a>'
      },
      {
        html: 'Accessible authentication'
      }
    ],
    [
      {
        html: '<a href="/patterns/contact-a-department-or-service-team/">Contact a department or service team pattern</a>'
      },
      {
        html: 'Consistent help'
      }
    ],
    [
      {
        html: '<a href="/patterns/create-accounts/">Create accounts pattern</a>'
      },
      {
        html: 'Accessible authentication<br>Redundant entry'
      }
    ],
    [
      {
        html: '<a href="/patterns/navigate-a-service/">Navigate a service pattern</a>'
      },
      {
        html: 'Focus not obscured (Minimum)<br>Consistent help'
      }
    ],
    [
      {
        html: '<a href="/patterns/validation/">Recover from validation errors pattern</a>'
      },
      {
        html: 'Redundant entry'
      }
    ]
  ]
}) }}

{{ govukTable({
  caption: "Page patterns",
  captionClasses: "govuk-table__caption--m",
  head: [
    {
      text: "Page",
      classes: "govuk-!-width-one-half"
    },
    {
      text: "Relevant WCAG 2.2 criteria",
      classes: "govuk-!-width-one-half"
    }
  ],
  rows: [
    [
      {
        html: '<a href="/patterns/page-not-found-pages/">Page not found pages pattern</a>'
      },
      {
        html: 'Consistent help'
      }
    ],
    [
      {
        html: '<a href="/patterns/question-pages/">Question pages pattern</a>'
      },
      {
        html: 'Dragging movements<br>Redundant entry'
      }
    ],
    [
      {
        html: '<a href="/patterns/service-unavailable-pages/">Service unavailable pages pattern</a>'
      },
      {
        html: 'Consistent help'
      }
    ],
    [
      {
        html: '<a href="/patterns/problem-with-the-service-pages/">There is a problem with the service pages pattern</a>'
      },
      {
        html: 'Consistent help<br>Redundant entry'
      }
    ]
  ]
}) }}
