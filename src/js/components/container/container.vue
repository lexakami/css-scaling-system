<template>
    <div :class="blockClass" :data-size="size" :data-has-border="hasBorder">
        <slot v-if="size === 'full-width'" />
        <div v-else :class="`${blockClass}__wrapper`">
            <div :class="`${blockClass}__inner`">
                <slot />
            </div>
        </div>
    </div>
</template>

<script>
import { oneOf } from '@utils/utils';

export default {
    name: 'Container',
    props: {
        /** `data-size` <br>
         * `'wide'` | `'extra-wide'` | `'full-width'` */
        size: {
            type: String,
            default: 'wide',
            validator: oneOf(['wide', 'extra-wide', 'full-width']),
        },
        hasBorder: {
            type: Boolean,
            default: true,
        },
    },
    data() {
        return {
            blockClass: 'container',
        };
    },
};
</script>

<style lang="scss">
.container {
    $self: &;

    --container-width: var(--container-width-wide);

    &__wrapper {
        @include scale-rem('padding-left', $container-padding-min, $container-padding-max);
        @include scale-rem('padding-right', $container-padding-min, $container-padding-max);
    }

    // Specify max width in CSS to allow autoprefixer to generate fallback
    &__inner {
        display: block;
        box-sizing: content-box;
        max-width: var(--container-width);
        margin-right: auto;
        margin-left: auto;
    }

    &[data-size='extra-wide'] {
        --container-width: var(--container-width-extra-wide);

        #{$self}__inner {
            max-width: var(--container-width);
        }
    }

    &[data-has-border] {
        .parent-stack > & {
            #{$self}__inner {
                @include scale-rem('padding-top', $scaling-spacing-5, $scaling-spacing-11);

                border-top: 0.1rem solid theme('color.green.600');
            }

            &[class*='background'] {
                #{$self}__inner {
                    @include scale-rem('padding-bottom', $scaling-spacing-7, $scaling-spacing-11);

                    border-top: 0;
                }
            }

            // Remove bordered style when parent element follows an outer element with a background class
            &[class*='background'] + * {
                #{$self}__inner {
                    border-top: 0;
                }
            }
        }
    }
}
</style>
