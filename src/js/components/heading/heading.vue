<script>
/**
 * An `Example` of how we add a description using doc gen
 */
export default {
    name: 'Heading',
    props: {
        level: {
            type: Number,
            required: true,
            validator: (value) => [1, 2, 3, 4, 5, 6].includes(value),
        },
    },
    render: function (createElement) {
        return createElement('h' + this.level, this.$slots.default);
    },
};
</script>

<style lang="scss">
.heading {
    $self: &;
}
</style>
