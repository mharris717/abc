if(!lt.util.load.provided_QMARK_('lt.plugins.abc')) {
goog.provide('lt.plugins.abc');
goog.require('cljs.core');
lt.plugins.abc.my_double_f = (function my_double_f(x){return (x * 2);
});
lt.plugins.abc.my_double_f.call(null,3);
(3 * 2);
lt.plugins.abc.my_quad = (function my_quad(x){return (2 * (x * 2));
});
lt.plugins.abc.my_quad.call(null,3);
}

//# sourceMappingURL=abc_compiled.js.map