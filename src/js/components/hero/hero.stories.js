import Hero from './hero';
import HeroTitle from '../hero-title/hero-title';

// hero image
import image391x391 from '../../../../.storybook/placeholders/hero/391x391.webp';
import image587x587 from '../../../../.storybook/placeholders/hero/587x587.webp';
import image783x783 from '../../../../.storybook/placeholders/hero/783x783.webp';
import image1228x1228 from '../../../../.storybook/placeholders/hero/1228x1228.webp';

export default {
    title: 'Scaling examples',
    parameters: {
        controls: false,
        componentSubtitle: `Examples to demonstrate the CSS scaling system. The system allows us to
        provide a min and max value for each element style to scale consistently between (e.g. font size,
        line height, padding, margin etc). In addition, you can also provide a min and max breakpoint
        to apply the scaling between (currently 360px and 1215px by default, customizable per element style).
        The scaled value will be clamped between the breakpoints, so will not exceed the min or max value.`,
    },
    args: {
        summary:
            '<p>Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit integer posuere erat a ante.</p>',
        date: {
            value: '2021-03-07',
            text: '07 March 2021',
        },
        duration: 'Read time: 12min',
        image: {
            sources: [
                {
                    type: 'image/webp',
                    srcset: `${image391x391} 391w, ${image587x587} 587w, ${image783x783} 783w, ${image1228x1228} 1228w`,
                },
            ],
            srcset: `${image391x391} 391w, ${image587x587} 587w, ${image783x783} 783w, ${image1228x1228} 1228w`,
            src: `${image587x587}`,
            alt: 'image placeholder',
        },
    },
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Hero, HeroTitle },
    template: `
        <hero v-bind="$props">
            <template #title>
                <hero-title
                    part1="Dapibus"
                    part2="Curabitur blandit"
                ></hero-title>
            </template>
        </hero>
    `,
});

export const Default = Template.bind({});

export const ScalesFrom700px = Template.bind({});
ScalesFrom700px.args = {
    scalingVariant: 'min',
};
ScalesFrom700px.parameters = {
    docs: {
        description: {
            story:
                'Only scales from 700px minimum breakpoint, up to default max breakpoint (1215px).',
        },
    },
};

export const ScalesUpTo700px = Template.bind({});
ScalesUpTo700px.args = {
    scalingVariant: 'max',
};
ScalesUpTo700px.parameters = {
    docs: {
        description: {
            story:
                'Only scales from default min breakpoint (360px), up to 700px maximum breakpoint.',
        },
    },
};

export const LargeMobileToSmallDesktop = Template.bind({});
LargeMobileToSmallDesktop.args = {
    scalingVariant: 'large-to-small',
};
LargeMobileToSmallDesktop.parameters = {
    docs: {
        description: {
            story: 'Starts with large title on mobile, scales to small title on desktop',
        },
    },
};

export const MultipleBreakpoints = Template.bind({});
MultipleBreakpoints.args = {
    scalingVariant: 'multiple',
};
MultipleBreakpoints.parameters = {
    docs: {
        description: {
            story: 'Has separate mobile, tablet, desktop scaling ratios.',
        },
    },
};

export const ScalingAndNonScaling = Template.bind({});
ScalingAndNonScaling.args = {
    scalingVariant: 'with-non-scaling',
};
ScalingAndNonScaling.parameters = {
    docs: {
        description: {
            story: 'Shows scaling elements alongside non scaling elements.',
        },
    },
};

export const ExtremeScaling = Template.bind({});
ExtremeScaling.args = {
    scalingVariant: 'extreme',
};
ExtremeScaling.parameters = {
    docs: {
        description: {
            story: 'Shows scaling elements with more extreme ratios.',
        },
    },
};
