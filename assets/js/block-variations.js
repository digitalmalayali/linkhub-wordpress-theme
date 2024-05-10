const { getBlockVariations, registerBlockVariation } = wp.blocks;
const { __ } = wp.i18n;
const domReady = wp.domReady;

// Enable grid

domReady(() => {
    const variations = getBlockVariations('core/group');

    if (!variations.some(variation => 'group-grid' === variation.name)) {
        registerBlockVariation('core/group', {
            name: 'group-grid',
            title: __('Grid', 'linkhub'),
            icon: 'grid-view',
            description: ('Arrange blocks in a grid.'),
            attributes: {
                layout: {
                    type: 'grid',
                    columnCount: 3
                }
            },
            innerBlocks: [
                [
                    'core/image'
                ],
                [
                    'core/image'
                ],
                [
                    'core/image'
                ]
            ],
            scope: ['block', 'inserter', 'transform'],
            isActive: (blockAttributes) =>
                blockAttributes.layout?.type === 'grid',
        });
    }
});


// Site logo variation

wp.blocks.registerBlockVariation(
    'core/site-logo',
    {
        name: 'site-logo-rounded',
        title: __('Site Logo', 'linkhub'),
        attributes: {
            width: 75,
            isLink: false,
            shouldSyncIcon: true,
            align: 'center',
            className: 'is-style-rounded'
        },
        isDefault: true
    }
);

// Site title variation

wp.blocks.registerBlockVariation(
    'core/site-title',
    {
        name: 'site-title-center',
        title: __('Site Title', 'linkhub'),
        attributes: {
            level: 3,
            textAlign: 'center',
            isLink: false,
            style: {
                spacing:
                {
                    margin:
                    {
                        top: '0.35em',
                        bottom: '0.6em'
                    }
                }
            },
            textColor: 'font-color'
        },
        isDefault: true
    }
);

// Site tagline variation

wp.blocks.registerBlockVariation(
    'core/site-tagline',
    {
        name: 'site-tagline-center',
        title: __('Site Tagline', 'linkhub'),
        attributes: {
            textAlign: 'center',
            textColor: 'font-color',
            style: {
                spacing:
                {
                    margin:
                    {
                        top: 0
                    }
                }
            },
        },
        isDefault: true
    }
);

// Social links variation

wp.blocks.registerBlockVariation(
    'core/social-links',
    {
        name: 'social-icons-center',
        title: __('Social Icons', 'linkhub'),
        attributes: {
            openInNewTab: true,
            size: 'has-normal-icon-size',
            align: 'center',
            layout: {
                type: 'flex',
                justifyContent: 'center',
                orientation: 'horizontal'
            }
        },
        isDefault: true
    }
);

// Summary variation

wp.blocks.registerBlockVariation(
    'core/details',
    {
        name: 'details-center',
        title: __('Details', 'linkhub'),
        attributes: {
            style:
            {
                elements:
                {
                    link:
                    {
                        color:
                        {
                            text: 'var:preset|color|error'

                        }
                    }
                },
                spacing:
                {
                    margin: {
                        top: '0.4em',
                        bottom: '0.5em'
                    }
                }
            },
            textColor: 'error',
            className: 'is-style-align-center'
        },
        isDefault: true
    }
);

// Heading variation

wp.blocks.registerBlockVariation(
    'core/heading',
    {
        name: 'heading-center',
        title: __('Heading', 'linkhub'),
        attributes: {
            level: 5,
            textAlign: 'center',
            textColor: 'font-color',
            style: {
                spacing: {
                    margin: {
                        top: '0.35em',
                        bottom: '0.6em'
                    }
                }
            }
        },
        isDefault: true
    }
);

// Buttons variation

wp.blocks.registerBlockVariation(
    'core/buttons',
    {
        name: 'buttons-center',
        title: __('Buttons', 'linkhub'),
        attributes: {
            layout:
            {
                type: 'flex',
                justifyContent: 'center',
                orientation: 'vertical'
            }
        },
        innerBlocks: [
            [
                'core/button',
                {
                    textAlign: 'center',
                    textColor: 'grey',
                    borderColor: 'grey',
                    className: 'is-style-outline',
                    style: {
                        border:
                        {
                            radius: '4px',
                            width: '1px'
                        },
                        elements: {
                            link:
                            {
                                color:
                                {
                                    text: 'var:preset|color|grey'
                                }
                            }
                        }
                    },
                },
            ]
        ],
        isDefault: true
    }
);