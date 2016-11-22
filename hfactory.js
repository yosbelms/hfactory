;(function(g) {

// Return an objects with factories of DOM elements,
// each factory is the provided function partialy applied
// using the element tag as the first argument
//
// example:
//
//     const hfactory = require('hfactory')
//     const {div, strong} = hfactory(h)
// 
//     const HelloView () =>
//         div({className: 'info'},
//             strong('Hellow Factory'))
//

function hfactory(h) {
    if (typeof h !== 'function') {
        throw new Error('`h` must be a function')
    }

    // DOM factories hash
    return {
        a             : newFactory('a', h),
        abbr          : newFactory('abbr', h),
        address       : newFactory('address', h),
        area          : newFactory('area', h),
        article       : newFactory('article', h),
        aside         : newFactory('aside', h),
        audio         : newFactory('audio', h),
        b             : newFactory('b', h),
        base          : newFactory('base', h),
        bdi           : newFactory('bdi', h),
        bdo           : newFactory('bdo', h),
        big           : newFactory('big', h),
        blockquote    : newFactory('blockquote', h),
        body          : newFactory('body', h),
        br            : newFactory('br', h),
        button        : newFactory('button', h),
        canvas        : newFactory('canvas', h),
        caption       : newFactory('caption', h),
        cite          : newFactory('cite', h),
        code          : newFactory('code', h),
        col           : newFactory('col', h),
        colgroup      : newFactory('colgroup', h),
        data          : newFactory('data', h),
        datalist      : newFactory('datalist', h),
        dd            : newFactory('dd', h),
        del           : newFactory('del', h),
        details       : newFactory('details', h),
        dfn           : newFactory('dfn', h),
        dialog        : newFactory('dialog', h),
        div           : newFactory('div', h),
        dl            : newFactory('dl', h),
        dt            : newFactory('dt', h),
        em            : newFactory('em', h),
        embed         : newFactory('embed', h),
        fieldset      : newFactory('fieldset', h),
        figcaption    : newFactory('figcaption', h),
        figure        : newFactory('figure', h),
        footer        : newFactory('footer', h),
        form          : newFactory('form', h),
        h1            : newFactory('h1', h),
        h2            : newFactory('h2', h),
        h3            : newFactory('h3', h),
        h4            : newFactory('h4', h),
        h5            : newFactory('h5', h),
        h6            : newFactory('h6', h),
        head          : newFactory('head', h),
        header        : newFactory('header', h),
        hgroup        : newFactory('hgroup', h),
        hr            : newFactory('hr', h),
        html          : newFactory('html', h),
        i             : newFactory('i', h),
        iframe        : newFactory('iframe', h),
        img           : newFactory('img', h),
        input         : newFactory('input', h),
        ins           : newFactory('ins', h),
        kbd           : newFactory('kbd', h),
        keygen        : newFactory('keygen', h),
        label         : newFactory('label', h),
        legend        : newFactory('legend', h),
        li            : newFactory('li', h),
        link          : newFactory('link', h),
        main          : newFactory('main', h),
        map           : newFactory('map', h),
        mark          : newFactory('mark', h),
        menu          : newFactory('menu', h),
        menuitem      : newFactory('menuitem', h),
        meta          : newFactory('meta', h),
        meter         : newFactory('meter', h),
        nav           : newFactory('nav', h),
        noscript      : newFactory('noscript', h),
        object        : newFactory('object', h),
        ol            : newFactory('ol', h),
        optgroup      : newFactory('optgroup', h),
        option        : newFactory('option', h),
        output        : newFactory('output', h),
        p             : newFactory('p', h),
        param         : newFactory('param', h),
        picture       : newFactory('picture', h),
        pre           : newFactory('pre', h),
        progress      : newFactory('progress', h),
        q             : newFactory('q', h),
        rp            : newFactory('rp', h),
        rt            : newFactory('rt', h),
        ruby          : newFactory('ruby', h),
        s             : newFactory('s', h),
        samp          : newFactory('samp', h),
        script        : newFactory('script', h),
        section       : newFactory('section', h),
        select        : newFactory('select', h),
        small         : newFactory('small', h),
        source        : newFactory('source', h),
        span          : newFactory('span', h),
        strong        : newFactory('strong', h),
        style         : newFactory('style', h),
        sub           : newFactory('sub', h),
        summary       : newFactory('summary', h),
        sup           : newFactory('sup', h),
        table         : newFactory('table', h),
        tbody         : newFactory('tbody', h),
        td            : newFactory('td', h),
        textarea      : newFactory('textarea', h),
        tfoot         : newFactory('tfoot', h),
        th            : newFactory('th', h),
        thead         : newFactory('thead', h),
        time          : newFactory('time', h),
        title         : newFactory('title', h),
        tr            : newFactory('tr', h),
        track         : newFactory('track', h),
        u             : newFactory('u', h),
        ul            : newFactory('ul', h),
        'var'         : newFactory('var', h),
        video         : newFactory('video', h),
        wbr           : newFactory('wbr', h),

        // SVG
        circle        : newFactory('circle', h),
        clipPath      : newFactory('clipPath', h),
        defs          : newFactory('defs', h),
        ellipse       : newFactory('ellipse', h),
        g             : newFactory('g', h),
        image         : newFactory('image', h),
        line          : newFactory('line', h),
        linearGradient: newFactory('linearGradient', h),
        mask          : newFactory('mask', h),
        path          : newFactory('path', h),
        pattern       : newFactory('pattern', h),
        polygon       : newFactory('polygon', h),
        polyline      : newFactory('polyline', h),
        radialGradient: newFactory('radialGradient', h),
        rect          : newFactory('rect', h),
        stop          : newFactory('stop', h),
        svg           : newFactory('svg', h),
        text          : newFactory('text', h),
        tspan         : newFactory('tspan', h)
    }
}

// shortcut to native utility
var slice = Array.prototype.slice

// create a new factory
function newFactory(tag, h) {
    return function factory() {
        var args = [tag].concat(slice.call(arguments))
        return h.apply(void 0, args)
    }
}

// export hfactory
if (typeof exports !== 'undefined') {
    module.exports = hfactory    
} else {
    this.hfactory = hfactory
}

})(this)