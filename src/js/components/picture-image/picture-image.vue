<template>
    <div :class="blockClass">
        <picture v-if="sources">
            <source
                v-for="(source, index) in sources"
                :key="index"
                :type="source.type"
                :media="source.media"
                :srcset="source.srcset"
                :sizes="sizes || source.sizes"
            />
            <img
                :src="src"
                :srcset="srcset"
                :alt="alt"
                :width="width"
                :height="height"
                :sizes="sizes"
                :decoding="decoding"
                :loading="lazy ? 'lazy' : null"
            />
        </picture>
        <img
            v-else
            :src="src"
            :srcset="srcset"
            :alt="alt"
            :width="width"
            :height="height"
            :sizes="sizes"
            :decoding="decoding"
            :loading="lazy ? 'lazy' : null"
        />
    </div>
</template>

<script>
import { oneOf } from '@utils/utils';

export default {
    name: 'PictureImage',
    props: {
        sources: {
            type: Array,
            default: null,
        },
        src: {
            type: String,
            required: true,
        },
        srcset: {
            type: String,
            required: true,
        },
        /**
         * This is used if the image doesn't need art direction,
         * otherwise it should be added within this.sources instead.
         */
        sizes: {
            type: String,
            default: null,
        },
        alt: {
            type: String,
            required: true,
        },
        width: {
            type: Number,
            required: true,
        },
        height: {
            type: Number,
            required: true,
        },
        lazy: {
            type: Boolean,
            default: true,
        },
        /** `'async'` | `'sync'` */
        decoding: {
            type: String,
            default: 'async',
            validator: oneOf(['async', 'sync']),
        },
    },
    data() {
        return {
            blockClass: 'picture-image',
        };
    },
};
</script>

<style lang="scss">
.picture-image {
    picture {
        img {
            width: 100%;
        }
    }
}
</style>
