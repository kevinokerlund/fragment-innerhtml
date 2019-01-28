const JSDOM = require('jsdom').JSDOM;

const dom = new JSDOM('<!DOCTYPE html><html><head></head><body></body></html>');

global.window = global.self = dom.window;
global.document = dom.window.document;
global.navigator = window.navigator;
