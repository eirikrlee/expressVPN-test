import 'babel-polyfill';
import 'jsdom-global/register'
import sinon from 'sinon';
import { expect } from 'chai';

global.sinon = sinon;
global.expect = expect;

