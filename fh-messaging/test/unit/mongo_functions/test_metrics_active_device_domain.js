exports.test_metrics_active_device_domain = function(test,assert) {
    var ts = new Date().getTime();
    var emit = function(data,obj) {
        assert.ok(data.appid == null,"expected appid not to be set");
        assert.ok(data.ts === ts,"expected timestamp to match");
        assert.ok(data.domain === 'test_domain', "expected domain to be set");
        assert.ok(obj.test_cuid.android === 1, "expected cuid to be set");
    };
    var undertest = require('../../../lib/mongo_functions/metrics_active_device_domain');
    undertest.setVars(ts,emit);
    var scope = {"_id": {appid:'test_app_id', domain:'test_domain', cuid:'test_cuid'}, "value": {"android":1}};
    undertest.metrics_active_device_domain.call(scope);
    test.finish();
};