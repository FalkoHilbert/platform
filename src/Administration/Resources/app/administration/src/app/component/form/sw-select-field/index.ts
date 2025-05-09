import template from './sw-select-field.html.twig';

const { Component } = Shopware;

/**
 * @sw-package framework
 *
 * @private
 * @status ready
 * @description Wrapper component for sw-select-field and mt-select. Autoswitches between the two components.
 *
 * @deprecated tag:v6.8.0 - Will be removed, use mt-select instead.
 */
Component.register('sw-select-field', {
    template,

    props: {
        options: {
            type: Array,
            required: false,
        },

        deprecated: {
            type: Boolean,
            required: false,
            default: false,
        },
    },

    methods: {
        getSlots() {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
            return this.$slots;
        },
    },
});
