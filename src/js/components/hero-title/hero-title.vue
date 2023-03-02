<template>
    <Heading :class="`${blockClass} h1`" :level="headingLevel" :data-title-size="titleSize">
        <template v-if="enableTransitions">
            <transition mode="out-in">
                <span
                    v-if="part1"
                    :key="part1"
                    :class="`${blockClass}__part1`"
                    v-html="part1"
                ></span>
                <span
                    v-if="part2"
                    :key="part2"
                    :class="`${blockClass}__part2`"
                    v-html="part2"
                ></span>
            </transition>
        </template>
        <template v-else>
            <span v-if="part1" :class="`${blockClass}__part1`" v-html="part1"></span>
            <span v-if="part2" :class="`${blockClass}__part2`" v-html="part2"></span>
        </template>
    </Heading>
</template>

<script>
import { oneOf } from '@utils/utils';

import Heading from '../heading/heading';

export default {
    name: 'HeroTitle',
    components: { Heading },
    props: {
        headingLevel: {
            type: Number,
            default: 1,
        },
        /** `data-title-size` <br>
         * `'small'` | `'medium'`*/
        titleSize: {
            type: String,
            default: 'small',
            validator: oneOf(['small', 'medium']),
        },
        part1: {
            type: String,
            default: null,
        },
        part2: {
            type: String,
            default: null,
        },
        enableTransitions: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            blockClass: 'hero-title',
        };
    },
};
</script>

<style lang="scss">
.hero-title {
    $self: &;

    // Reset h2 color
    color: theme('color.black');

    span {
        display: block;
        transition: opacity 0.2s ease;

        &.v-enter,
        &.v-leave-to {
            opacity: 0;
        }
    }

    &__part2 {
        color: theme('color.green.600');
    }

    &[data-title-size='medium'] {
        @include scale-rem('font-size', $scaling-font-11, 12);
        @include scale-rem('line-height', $scaling-font-9, 9);

        margin-top: 0;
        text-transform: uppercase;
    }

    @media (min-width: #{em(theme('breakpoints.hero') + 1)}) {
        margin-top: calc(var(--spacing-neg4) * -1);
    }
}
</style>
