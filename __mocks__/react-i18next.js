const i18next = jest.genMockFromModule('react-i18next');
i18next.t = (i) => i;
i18next.translate = function (c) {
    return;
};
i18next.use = function (c) {
    return;
};

module.exports = i18next;