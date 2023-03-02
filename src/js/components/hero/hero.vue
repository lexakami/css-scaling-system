<template>
    <div
        ref="hero"
        :class="blockClass"
        :data-image-position="imagePosition"
        :data-scaling-variant="scalingVariant"
    >
        <Container :has-border="false" :class="`${blockClass}__container`">
            <div :class="`${blockClass}__inner`">
                <h1 v-if="hiddenTitle" class="visually-hidden">{{ hiddenTitle }}</h1>

                <div :class="`${blockClass}__content`">
                    <slot name="title" />

                    <div v-if="date || duration">
                        <time v-if="date" :datetime="date.value" :class="`${blockClass}__date`">
                            {{ date.text }}
                        </time>
                        <div v-if="duration" :class="`${blockClass}__duration`">
                            {{ duration }}
                        </div>
                    </div>
                    <div v-if="summary" :class="`${blockClass}__summary`" v-html="summary"></div>
                </div>
                <div v-if="image" :class="`${blockClass}__image-wrap`">
                    <PictureImage
                        v-bind="image"
                        :sizes="imageSizes"
                        :width="587"
                        :height="587"
                        decoding="async"
                    />
                </div>
            </div>
        </Container>
    </div>
</template>

<script>
import Theme from '../../../theme';
import { oneOf, isImg, em } from '@utils/utils';

import Container from '../container/container';
import PictureImage from '../picture-image/picture-image';

export default {
    name: 'Hero',
    components: {
        Container,
        PictureImage,
    },
    props: {
        scalingVariant: {
            type: String,
            default: null,
            validator: oneOf([
                'min',
                'max',
                'large-to-small',
                'with-non-scaling',
                'multiple',
                'extreme',
            ]),
        },
        hiddenTitle: {
            type: String,
            default: null,
        },
        /** Used for both image and video poster frame */
        image: {
            type: Object,
            default: null,
            validator: isImg(['width', 'height']),
        },
        /** `data-image-position` <br>
         * `'left'` | `'right'` */
        imagePosition: {
            type: String,
            default: 'right',
            validator: oneOf(['left', 'right']),
        },
        summary: {
            type: String,
            default: null,
        },
        duration: {
            type: String,
            default: null,
        },
        date: {
            type: Object,
            default: null,
        },
    },
    data() {
        return {
            blockClass: 'hero',
            titleFontSize: null,
        };
    },
    computed: {
        imageSizes() {
            return `(min-width: ${em(1420)}) ${em(587)}, (min-width: ${em(
                Theme.breakpoints.hero + 1
            )}) 42.86vw, calc(93.95vw - ${em(43)})`;
        },
        getTitle() {
            return this.$refs.hero.querySelector('.hero-title');
        },
    },
    watch: {
        titleFontSize() {
            console.log(this.titleFontSize);
        },
    },
    mounted() {
        this.updateTitleFontSize();

        window.addEventListener('resize', this.onResize);
    },
    methods: {
        updateTitleFontSize() {
            this.titleFontSize = window
                .getComputedStyle(this.getTitle)
                .getPropertyValue('font-size');
        },
        onResize() {
            this.updateTitleFontSize();
        },
    },
};
</script>

<style lang="scss">
.hero {
    $self: &;

    $breakpoint: 699;
    $min-breakpoint: $breakpoint + 1;
    $max-breakpoint: $breakpoint;

    // For hero intersect positioning
    position: relative;
    // Move space to padding bottom so that intersect includes the space
    padding-bottom: var(--space);

    // Remove space from adjacent sibling
    + * {
        --space: 0;
    }

    img {
        width: 100%;
    }

    &__inner {
        @include scale-rem('--space', $scaling-spacing-3, $scaling-spacing-11);

        display: grid;
        grid-column-gap: var(--hero-nav-column-gap);
        grid-row-gap: var(--space);
    }

    &__content {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;

        &:only-child {
            height: 100%;
        }

        > :nth-child(1) {
            margin-bottom: auto;
        }

        > * + * {
            margin-top: var(--space);
        }
    }

    &__image-wrap {
        order: -1;
    }

    &__date,
    &__duration {
        line-height: theme('lineHeight.-5');
        color: theme('color.grey.600');
    }

    &__date {
        display: inline-block;
    }

    &__summary {
        --measure: 35ch;

        line-height: theme('lineHeight.-2');
    }

    &:not([data-scaling-variant]),
    &[data-scaling-variant='large-to-small'],
    &[data-scaling-variant='with-non-scaling'],
    &[data-scaling-variant='extreme'] {
        #{$self}__inner {
            @include scale-rem('grid-row-gap', $scaling-spacing-4, $scaling-spacing-10);
        }

        #{$self}__content {
            @include scale-rem('--space', $scaling-spacing-0, $scaling-spacing-4);
        }

        #{$self}__date,
        #{$self}__duration {
            @include scale-rem('font-size', $scaling-font-0, $scaling-font-1);
        }

        #{$self}__duration {
            @include scale-rem('--space', $scaling-spacing-neg5, $scaling-spacing-neg3);
        }

        #{$self}__summary {
            @include scale-rem('font-size', $scaling-font-2, $scaling-font-4);
            @include scale-rem('letter-spacing', 0, 0.06);
        }
    }

    &[data-scaling-variant='min'] {
        h1 {
            @include scale-rem('font-size', $scaling-font-8, 9, $vmin: $min-breakpoint);
            @include scale-rem('line-height', 3.8, 8, $vmin: $min-breakpoint);
            @include scale-rem('letter-spacing', -0.116, -0.254, $vmin: $min-breakpoint);

            + * {
                @include scale-rem(
                    '--space',
                    $scaling-spacing-4,
                    $scaling-spacing-8,
                    $vmin: $min-breakpoint
                );
            }
        }

        #{$self}__inner {
            @include scale-rem(
                'grid-row-gap',
                $scaling-spacing-4,
                $scaling-spacing-10,
                $vmin: $min-breakpoint
            );
        }

        #{$self}__content {
            @include scale-rem(
                '--space',
                $scaling-spacing-0,
                $scaling-spacing-4,
                $vmin: $min-breakpoint
            );
        }

        #{$self}__date,
        #{$self}__duration {
            @include scale-rem(
                'font-size',
                $scaling-font-0,
                $scaling-font-1,
                $vmin: $min-breakpoint
            );
        }

        #{$self}__duration {
            @include scale-rem(
                '--space',
                $scaling-spacing-neg5,
                $scaling-spacing-neg3,
                $vmin: $min-breakpoint
            );
        }

        #{$self}__summary {
            @include scale-rem(
                'font-size',
                $scaling-font-2,
                $scaling-font-4,
                $vmin: $min-breakpoint
            );
            @include scale-rem('letter-spacing', 0, 0.06, $vmin: $min-breakpoint);
        }
    }

    &[data-scaling-variant='max'] {
        h1 {
            @include scale-rem('font-size', $scaling-font-8, 9, $vmax: $max-breakpoint);
            @include scale-rem('line-height', 3.8, 8, $vmax: $max-breakpoint);
            @include scale-rem('letter-spacing', -0.116, -0.254, $vmax: $max-breakpoint);

            + * {
                @include scale-rem(
                    '--space',
                    $scaling-spacing-4,
                    $scaling-spacing-8,
                    $vmax: $max-breakpoint
                );
            }
        }

        #{$self}__inner {
            @include scale-rem(
                'grid-row-gap',
                $scaling-spacing-4,
                $scaling-spacing-10,
                $vmax: $max-breakpoint
            );
        }

        #{$self}__content {
            @include scale-rem(
                '--space',
                $scaling-spacing-0,
                $scaling-spacing-4,
                $vmax: $max-breakpoint
            );
        }

        #{$self}__date,
        #{$self}__duration {
            @include scale-rem(
                'font-size',
                $scaling-font-0,
                $scaling-font-1,
                $vmax: $max-breakpoint
            );
        }

        #{$self}__duration {
            @include scale-rem(
                '--space',
                $scaling-spacing-neg5,
                $scaling-spacing-neg3,
                $vmax: $max-breakpoint
            );
        }

        #{$self}__summary {
            @include scale-rem(
                'font-size',
                $scaling-font-2,
                $scaling-font-4,
                $vmax: $max-breakpoint
            );
            @include scale-rem('letter-spacing', 0, 0.06, $vmax: $max-breakpoint);
        }
    }

    &[data-scaling-variant='large-to-small'] {
        h1 {
            @include scale-rem('font-size', 8, $scaling-font-10, $isReverse: true);
            @include scale-rem('line-height', 8, 3.8, $isReverse: true);
            @include scale-rem('letter-spacing', -0.254, -0.116, $isReverse: true);

            + * {
                @include scale-rem(
                    '--space',
                    $scaling-spacing-8,
                    $scaling-spacing-4,
                    $isReverse: true
                );
            }
        }

        #{$self}__summary {
            @include scale-rem('font-size', $scaling-font-4, $scaling-font-2, $isReverse: true);
            @include scale-rem('letter-spacing', 0.06, 0, $isReverse: true);
        }
    }

    &[data-scaling-variant='with-non-scaling'] {
        #{$self}__content {
            --space: var(--spacing-4);
        }

        #{$self}__date,
        #{$self}__duration {
            font-size: var(--font-1);
        }

        #{$self}__duration {
            --space: var(--spacing-neg3);
        }

        #{$self}__summary {
            font-size: var(--font-4);
            letter-spacing: 0.06;
        }
    }

    &[data-scaling-variant='extreme'] {
        h1 {
            @include scale-rem('font-size', $scaling-font-5, 12);
            @include scale-rem('line-height', 3, 10);
            @include scale-rem('letter-spacing', -0.116, -0.254);

            + * {
                @include scale-rem('--space', $scaling-spacing-neg5, $scaling-spacing-11);
            }
        }

        #{$self}__summary {
            @include scale-rem('font-size', $scaling-font-2, $scaling-font-8);
        }
    }

    @media (max-width: #{em(699)}) {
        &[data-scaling-variant='multiple'] {
            h1 {
                @include scale-rem('font-size', $scaling-font-8, 8, $vmax: $max-breakpoint);
                @include scale-rem('line-height', 3.8, 7, $vmax: $max-breakpoint);
                @include scale-rem('letter-spacing', -0.116, -0.254, $vmax: $max-breakpoint);

                + * {
                    @include scale-rem(
                        '--space',
                        $scaling-spacing-4,
                        $scaling-spacing-8,
                        $vmax: $max-breakpoint
                    );
                }
            }

            #{$self}__summary {
                @include scale-rem(
                    'font-size',
                    $scaling-font-2,
                    $scaling-font-6,
                    $vmax: $max-breakpoint
                );
            }
        }
    }

    @media (min-width: #{em(699)}) {
        &__inner {
            grid-template-columns: repeat(2, 1fr);
        }

        &__image-wrap {
            order: 0;
        }

        &[data-image-position='left'] {
            #{$self}__image-wrap {
                order: -1;
            }
        }

        &[data-scaling-variant='multiple'] {
            h1 {
                @include scale-rem(
                    'font-size',
                    $scaling-font-8,
                    8.5,
                    $vmin: $min-breakpoint,
                    $vmax: 1214
                );
                @include scale-rem('line-height', 3.8, 8, $vmin: $min-breakpoint, $vmax: 1214);
                @include scale-rem(
                    'letter-spacing',
                    -0.116,
                    -0.254,
                    $vmin: $min-breakpoint,
                    $vmax: 1214
                );
            }

            #{$self}__summary {
                @include scale-rem(
                    'font-size',
                    $scaling-font-2,
                    $scaling-font-6,
                    $vmin: $min-breakpoint,
                    $vmax: 1214
                );
            }
        }
    }

    @media (min-width: #{em(1215)}) {
        &[data-scaling-variant='multiple'] {
            h1 {
                @include scale-rem('font-size', $scaling-font-9, 10, $vmin: 1215, $vmax: 1600);
                @include scale-rem('line-height', 4.5, 8.5, $vmin: 1215, $vmax: 1600);
                @include scale-rem('letter-spacing', -0.116, -0.254, $vmin: 1215, $vmax: 1600);

                + * {
                    @include scale-rem(
                        '--space',
                        $scaling-spacing-4,
                        $scaling-spacing-8,
                        $vmin: 1215,
                        $vmax: 1600
                    );
                }
            }

            #{$self}__summary {
                @include scale-rem(
                    'font-size',
                    $scaling-font-2,
                    $scaling-font-7,
                    $vmin: 1215,
                    $vmax: 1600
                );
            }
        }
    }
}
</style>
