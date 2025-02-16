module.exports = [
  {
    title: 'Welcome to openHAB',
    collapsable: false,
    children: [
      ''
    ]
  },
  {
    title: 'Getting Started',
    collapsable: false,
    children: [
      ['tutorial/', 'Tutorial Overview'],
      'tutorial/first_steps',
      'tutorial/things_simple',
      'tutorial/things_intermediate',
      'tutorial/things_advanced',
      'tutorial/model',
      'tutorial/persistence',
      'tutorial/pages_intro',
      'tutorial/auto_overview',
      'tutorial/item_widgets',
      'tutorial/custom_widgets',
      'tutorial/rules_introduction',
      'tutorial/rules_overview',
      'tutorial/rules_basic',
      'tutorial/rules_blockly',
      'tutorial/rules_advanced',
      'tutorial/tips-and-tricks'
    ]
  },
  {
    title: 'Installation Guide',
    collapsable: false,
    children: [
      'installation/',
      ['installation/linux', 'Linux'],
      ['installation/windows', 'Windows'],
      ['installation/macos', 'macOS'],
      'installation/openhabian',
      'installation/armbian',
      'installation/docker',
      'installation/synology',
      ['installation/security', 'Security']
    ]
  },
  {
    title: 'Concepts',
    collapsable: false,
    children: [
      ['concepts/', 'Concepts Overview'],
      'concepts/things',
      'concepts/items',
      'concepts/discovery',
      'concepts/audio',
      'concepts/units-of-measurement',
      'concepts/rules',
    ]
  },
  {
    title: 'Configuration Guide',
    collapsable: false,
    children: [
      ['configuration/', 'Configuration Overview'],
      'configuration/editors',
      'configuration/addons',
      'configuration/things',
      'configuration/items',
      'configuration/persistence',
      'configuration/rules-dsl',
      ['configuration/blockly/', 'Blockly Rules'],
      'configuration/transformations',
      'configuration/actions',
      'configuration/iconsets/classic/',
      'configuration/jsr223',
      'configuration/services',
      'configuration/multimedia',
      ['configuration/restdocs', 'REST API'],
      ['configuration/websocket', 'WebSocket API'],
      ['configuration/apitokens', 'API Token Generation'],
      ['configuration/migration/', 'Migration from openHAB 2']
    ]
  },
    {
      title: 'Settings',
      collapsable: false,
      children: [
        ['settings/', 'Settings Overview'],
        'settings/aboutpage',
        'settings/configuration',
        ['settings/automations', 'Automation'],
        'settings/addons',
        'settings/services_system',
        'settings/services_other',
      ]
    },
  {
    title: 'User Interface Guide',
    collapsable: false,
    children: [
      'ui/',
      'ui/sitemaps',
      'ui/layout-pages',
      'ui/map-pages',
      'ui/floorplan-pages',
      'ui/tabbed-pages',
      'ui/chart-pages',
      ['ui/building-pages', 'Building Pages'],
      ['ui/personal-widgets', 'Creating Personal Widgets'],
      ['ui/components/', 'Component Reference'],
      'ui/habpanel/habpanel',
      ['apps/android', 'Android App'],
      'apps/ios',
      'apps/windows'
    ]
  },
  {
    title: 'Ecosystem',
    collapsable: false,
    children: [
      ['ecosystem/alexa/', 'Amazon Alexa'],
      ['ecosystem/google-assistant/', 'Google Assistant'],
      ['../addons/integrations/homekit/', 'Apple HomeKit'],
      // ['ecosystem/ifttt/', 'IFTTT'], // Temporary remove until service gets reactivated
      ['ecosystem/mycroft/', 'Mycroft.AI'],
      ['../addons/integrations/openhabcloud/', 'openHAB Cloud'],
    ]
  },
  {
    title: 'Administration Guide',
    collapsable: false,
    children: [
      'administration/',
      'administration/console',
      'administration/runtime',
      'administration/bundles',
      'administration/logging',
      'administration/jsondb',
      'administration/serial'
    ]
  },
  {
    title: 'Developer Guide',
    collapsable: false,
    children: [
      ['developer/', 'Overview & Introduction'],
      'developer/guidelines',
      'developer/bindings/',
      'developer/module-types/',
      'developer/transformations/',
      'developer/ioservices/',
      'developer/persistence/',
      'developer/audio/',
    ]
  },
  {
    title: 'Developer Appendix',
    collapsable: false,
    children: [
      'developer/buildsystem',
      'developer/osgi/osgi',
      'developer/utils/tools',
      'developer/utils/i18n',
      'developer/utils/events',
      'developer/tests',
      'developer/contributing',
      'developer/governance',
      {
        title: 'Javadoc',
        path: 'https://openhab.org/javadoc/latest/'
      }
    ]
  },
]
