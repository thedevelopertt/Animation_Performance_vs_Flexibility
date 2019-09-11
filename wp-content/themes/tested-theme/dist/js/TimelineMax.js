var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(t,e,i){var s=function(e){t.call(this,e),this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._cycle=0,this._yoyo=!!this.vars.yoyo,this._dirty=!0},r=e._internals,a=r.lazyTweens,n=r.lazyRender,h=_gsScope._gsDefine.globals,_=new i(null,null,1,0),o=s.prototype=new t;return o.constructor=s,o.kill()._gc=!1,s.version="2.1.3",o.invalidate=function(){return this._yoyo=!!this.vars.yoyo,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),t.prototype.invalidate.call(this)},o.addCallback=function(t,i,s,r){return this.add(e.delayedCall(0,t,s,r),i)},o.removeCallback=function(t,e){if(t)if(null==e)this._kill(null,t);else for(var i=this.getTweensOf(t,!1),s=i.length,r=this._parseTimeOrLabel(e);--s>-1;)i[s]._startTime===r&&i[s]._enabled(!1,!1);return this},o.removePause=function(e){return this.removeCallback(t._internals.pauseCallback,e)},o.tweenTo=function(t,i){i=i||{};var s,r,a,n={ease:_,useFrames:this.usesFrames(),immediateRender:!1,lazy:!1},o=i.repeat&&h.TweenMax||e;for(r in i)n[r]=i[r];return n.time=this._parseTimeOrLabel(t),s=Math.abs(Number(n.time)-this._time)/this._timeScale||.001,a=new o(this,s,n),n.onStart=function(){a.target.paused(!0),a.vars.time===a.target.time()||s!==a.duration()||a.isFromTo||a.duration(Math.abs(a.vars.time-a.target.time())/a.target._timeScale).render(a.time(),!0,!0),i.onStart&&i.onStart.apply(i.onStartScope||i.callbackScope||a,i.onStartParams||[])},a},o.tweenFromTo=function(t,e,i){i=i||{},t=this._parseTimeOrLabel(t),i.startAt={onComplete:this.seek,onCompleteParams:[t],callbackScope:this},i.immediateRender=!1!==i.immediateRender;var s=this.tweenTo(e,i);return s.isFromTo=1,s.duration(Math.abs(s.vars.time-t)/this._timeScale||.001)},o.render=function(t,e,i){this._gc&&this._enabled(!0,!1);var s,r,h,_,o,l,m,u,c,d=this._time,f=this._dirty?this.totalDuration():this._totalDuration,p=this._duration,T=this._totalTime,v=this._startTime,y=this._timeScale,g=this._rawPrevTime,b=this._paused,w=this._cycle;if(d!==this._time&&(t+=this._time-d),t>=f-1e-8&&t>=0)this._locked||(this._totalTime=f,this._cycle=this._repeat),this._reversed||this._hasPausedChild()||(r=!0,_="onComplete",o=!!this._timeline.autoRemoveChildren,0===this._duration&&(t<=0&&t>=-1e-8||g<0||1e-8===g)&&g!==t&&this._first&&(o=!0,g>1e-8&&(_="onReverseComplete"))),this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:1e-8,this._yoyo&&1&this._cycle?this._time=t=0:(this._time=p,t=p+1e-4);else if(t<1e-8)if(this._locked||(this._totalTime=this._cycle=0),this._time=0,t>-1e-8&&(t=0),(0!==d||0===p&&1e-8!==g&&(g>0||t<0&&g>=0)&&!this._locked)&&(_="onReverseComplete",r=this._reversed),t<0)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(o=r=!0,_="onReverseComplete"):g>=0&&this._first&&(o=!0),this._rawPrevTime=t;else{if(this._rawPrevTime=p||!e||t||this._rawPrevTime===t?t:1e-8,0===t&&r)for(s=this._first;s&&0===s._startTime;)s._duration||(r=!1),s=s._next;t=0,this._initted||(o=!0)}else 0===p&&g<0&&(o=!0),this._time=this._rawPrevTime=t,this._locked||(this._totalTime=t,0!==this._repeat&&(l=p+this._repeatDelay,this._cycle=this._totalTime/l>>0,this._cycle&&this._cycle===this._totalTime/l&&T<=t&&this._cycle--,this._time=this._totalTime-this._cycle*l,this._yoyo&&1&this._cycle&&(this._time=p-this._time),this._time>p?(this._time=p,t=p+1e-4):this._time<0?this._time=t=0:t=this._time));if(this._hasPause&&!this._forcingPlayhead&&!e){if((t=this._time)>d||this._repeat&&w!==this._cycle)for(s=this._first;s&&s._startTime<=t&&!m;)s._duration||"isPause"!==s.data||s.ratio||0===s._startTime&&0===this._rawPrevTime||(m=s),s=s._next;else for(s=this._last;s&&s._startTime>=t&&!m;)s._duration||"isPause"===s.data&&s._rawPrevTime>0&&(m=s),s=s._prev;m&&(c=this._startTime+(this._reversed?this._duration-m._startTime:m._startTime)/this._timeScale,m._startTime<p&&(this._time=this._rawPrevTime=t=m._startTime,this._totalTime=t+this._cycle*(this._totalDuration+this._repeatDelay)))}if(this._cycle!==w&&!this._locked){var D=this._yoyo&&0!=(1&w),P=D===(this._yoyo&&0!=(1&this._cycle)),S=this._totalTime,C=this._cycle,k=this._rawPrevTime,x=this._time;if(this._totalTime=w*p,this._cycle<w?D=!D:this._totalTime+=p,this._time=d,this._rawPrevTime=0===p?g-1e-4:g,this._cycle=w,this._locked=!0,d=D?0:p,this.render(d,e,0===p),e||this._gc||this.vars.onRepeat&&(this._cycle=C,this._locked=!1,this._callback("onRepeat")),d!==this._time)return;if(P&&(this._cycle=w,this._locked=!0,d=D?p+1e-4:-1e-4,this.render(d,!0,!1)),this._locked=!1,this._paused&&!b)return;this._time=x,this._totalTime=S,this._cycle=C,this._rawPrevTime=k}if(this._time!==d&&this._first||i||o||m){if(this._initted||(this._initted=!0),this._active||!this._paused&&this._totalTime!==T&&t>0&&(this._active=!0),0===T&&this.vars.onStart&&(0===this._totalTime&&this._totalDuration||e||this._callback("onStart")),(u=this._time)>=d)for(s=this._first;s&&(h=s._next,u===this._time&&(!this._paused||b));)(s._active||s._startTime<=this._time&&!s._paused&&!s._gc)&&(m===s&&(this.pause(),this._pauseTime=c),s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=h;else for(s=this._last;s&&(h=s._prev,u===this._time&&(!this._paused||b));){if(s._active||s._startTime<=d&&!s._paused&&!s._gc){if(m===s){for(m=s._prev;m&&m.endTime()>this._time;)m.render(m._reversed?m.totalDuration()-(t-m._startTime)*m._timeScale:(t-m._startTime)*m._timeScale,e,i),m=m._prev;m=null,this.pause(),this._pauseTime=c}s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)}s=h}this._onUpdate&&(e||(a.length&&n(),this._callback("onUpdate"))),_&&(this._locked||this._gc||v!==this._startTime&&y===this._timeScale||(0===this._time||f>=this.totalDuration())&&(r&&(a.length&&n(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[_]&&this._callback(_)))}else T!==this._totalTime&&this._onUpdate&&(e||this._callback("onUpdate"))},o.getActive=function(t,e,i){var s,r,a=[],n=this.getChildren(t||null==t,e||null==t,!!i),h=0,_=n.length;for(s=0;s<_;s++)(r=n[s]).isActive()&&(a[h++]=r);return a},o.getLabelAfter=function(t){t||0!==t&&(t=this._time);var e,i=this.getLabelsArray(),s=i.length;for(e=0;e<s;e++)if(i[e].time>t)return i[e].name;return null},o.getLabelBefore=function(t){null==t&&(t=this._time);for(var e=this.getLabelsArray(),i=e.length;--i>-1;)if(e[i].time<t)return e[i].name;return null},o.getLabelsArray=function(){var t,e=[],i=0;for(t in this._labels)e[i++]={time:this._labels[t],name:t};return e.sort(function(t,e){return t.time-e.time}),e},o.invalidate=function(){return this._locked=!1,t.prototype.invalidate.call(this)},o.progress=function(t,e){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!=(1&this._cycle)?1-t:t)+this._cycle*(this._duration+this._repeatDelay),e):this._time/this.duration()||0},o.totalProgress=function(t,e){return arguments.length?this.totalTime(this.totalDuration()*t,e):this._totalTime/this.totalDuration()||0},o.totalDuration=function(e){return arguments.length?-1!==this._repeat&&e?this.timeScale(this.totalDuration()/e):this:(this._dirty&&(t.prototype.totalDuration.call(this),this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat),this._totalDuration)},o.time=function(t,e){if(!arguments.length)return this._time;this._dirty&&this.totalDuration();var i=this._duration,s=this._cycle,r=s*(i+this._repeatDelay);return t>i&&(t=i),this.totalTime(this._yoyo&&1&s?i-t+r:this._repeat?t+r:t,e)},o.repeat=function(t){return arguments.length?(this._repeat=t,this._uncache(!0)):this._repeat},o.repeatDelay=function(t){return arguments.length?(this._repeatDelay=t,this._uncache(!0)):this._repeatDelay},o.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},o.currentLabel=function(t){return arguments.length?this.seek(t,!0):this.getLabelBefore(this._time+1e-8)},s},!0),_gsScope._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(t,e,i){var s=function(t){e.call(this,t);var i,s,r=this.vars;for(s in this._labels={},this.autoRemoveChildren=!!r.autoRemoveChildren,this.smoothChildTiming=!!r.smoothChildTiming,this._sortChildren=!0,this._onUpdate=r.onUpdate,r)i=r[s],h(i)&&-1!==i.join("").indexOf("{self}")&&(r[s]=this._swapSelfInParams(i));h(r.tweens)&&this.add(r.tweens,0,r.align,r.stagger)},r=i._internals,a=s._internals={},n=r.isSelector,h=r.isArray,_=r.lazyTweens,o=r.lazyRender,l=_gsScope._gsDefine.globals,m=function(t){var e,i={};for(e in t)i[e]=t[e];return i},u=function(t,e,i){var s,r,a=t.cycle;for(s in a)r=a[s],t[s]="function"==typeof r?r(i,e[i],e):r[i%r.length];delete t.cycle},c=a.pauseCallback=function(){},d=function(t,e,i,s){var r="immediateRender";return r in e||(e[r]=!(i&&!1===i[r]||s)),e},f=function(t){if("function"==typeof t)return t;var e="object"==typeof t?t:{each:t},i=e.ease,s=e.from||0,r=e.base||0,a={},n=isNaN(s),h=e.axis,_={center:.5,end:1}[s]||0;return function(t,o,l){var m,u,c,d,f,p,T,v,y,g=(l||e).length,b=a[g];if(!b){if(!(y="auto"===e.grid?0:(e.grid||[1/0])[0])){for(T=-1/0;T<(T=l[y++].getBoundingClientRect().left)&&y<g;);y--}for(b=a[g]=[],m=n?Math.min(y,g)*_-.5:s%y,u=n?g*_/y-.5:s/y|0,T=0,v=1/0,p=0;p<g;p++)c=p%y-m,d=u-(p/y|0),b[p]=f=h?Math.abs("y"===h?d:c):Math.sqrt(c*c+d*d),f>T&&(T=f),f<v&&(v=f);b.max=T-v,b.min=v,b.v=g=e.amount||e.each*(y>g?g-1:h?"y"===h?g/y:y:Math.max(y,g/y))||0,b.b=g<0?r-g:r}return g=(b[t]-b.min)/b.max,b.b+(i?i.getRatio(g):g)*b.v}},p=s.prototype=new e;return s.version="2.1.3",s.distribute=f,p.constructor=s,p.kill()._gc=p._forcingPlayhead=p._hasPause=!1,p.to=function(t,e,s,r){var a=s.repeat&&l.TweenMax||i;return e?this.add(new a(t,e,s),r):this.set(t,s,r)},p.from=function(t,e,s,r){return this.add((s.repeat&&l.TweenMax||i).from(t,e,d(0,s)),r)},p.fromTo=function(t,e,s,r,a){var n=r.repeat&&l.TweenMax||i;return r=d(0,r,s),e?this.add(n.fromTo(t,e,s,r),a):this.set(t,r,a)},p.staggerTo=function(t,e,r,a,h,_,o,l){var c,d,p=new s({onComplete:_,onCompleteParams:o,callbackScope:l,smoothChildTiming:this.smoothChildTiming}),T=f(r.stagger||a),v=r.startAt,y=r.cycle;for("string"==typeof t&&(t=i.selector(t)||t),n(t=t||[])&&(t=function(t){var e,i=[],s=t.length;for(e=0;e!==s;i.push(t[e++]));return i}(t)),d=0;d<t.length;d++)c=m(r),v&&(c.startAt=m(v),v.cycle&&u(c.startAt,t,d)),y&&(u(c,t,d),null!=c.duration&&(e=c.duration,delete c.duration)),p.to(t[d],e,c,T(d,t[d],t));return this.add(p,h)},p.staggerFrom=function(t,e,i,s,r,a,n,h){return i.runBackwards=!0,this.staggerTo(t,e,d(0,i),s,r,a,n,h)},p.staggerFromTo=function(t,e,i,s,r,a,n,h,_){return s.startAt=i,this.staggerTo(t,e,d(0,s,i),r,a,n,h,_)},p.call=function(t,e,s,r){return this.add(i.delayedCall(0,t,e,s),r)},p.set=function(t,e,s){return this.add(new i(t,0,d(0,e,null,!0)),s)},s.exportRoot=function(t,e){null==(t=t||{}).smoothChildTiming&&(t.smoothChildTiming=!0);var r,a,n,h,_=new s(t),o=_._timeline;for(null==e&&(e=!0),o._remove(_,!0),_._startTime=0,_._rawPrevTime=_._time=_._totalTime=o._time,n=o._first;n;)h=n._next,e&&n instanceof i&&n.target===n.vars.onComplete||((a=n._startTime-n._delay)<0&&(r=1),_.add(n,a)),n=h;return o.add(_,0),r&&_.totalDuration(),_},p.add=function(r,a,n,_){var o,l,m,u,c,d;if("number"!=typeof a&&(a=this._parseTimeOrLabel(a,0,!0,r)),!(r instanceof t)){if(r instanceof Array||r&&r.push&&h(r)){for(n=n||"normal",_=_||0,o=a,l=r.length,m=0;m<l;m++)h(u=r[m])&&(u=new s({tweens:u})),this.add(u,o),"string"!=typeof u&&"function"!=typeof u&&("sequence"===n?o=u._startTime+u.totalDuration()/u._timeScale:"start"===n&&(u._startTime-=u.delay())),o+=_;return this._uncache(!0)}if("string"==typeof r)return this.addLabel(r,a);if("function"!=typeof r)throw"Cannot add "+r+" into the timeline; it is not a tween, timeline, function, or string.";r=i.delayedCall(0,r)}if(e.prototype.add.call(this,r,a),(r._time||!r._duration&&r._initted)&&(o=(this.rawTime()-r._startTime)*r._timeScale,(!r._duration||Math.abs(Math.max(0,Math.min(r.totalDuration(),o)))-r._totalTime>1e-5)&&r.render(o,!1,!1)),(this._gc||this._time===this._duration)&&!this._paused&&this._duration<this.duration())for(d=(c=this).rawTime()>r._startTime;c._timeline;)d&&c._timeline.smoothChildTiming?c.totalTime(c._totalTime,!0):c._gc&&c._enabled(!0,!1),c=c._timeline;return this},p.remove=function(e){if(e instanceof t){this._remove(e,!1);var i=e._timeline=e.vars.useFrames?t._rootFramesTimeline:t._rootTimeline;return e._startTime=(e._paused?e._pauseTime:i._time)-(e._reversed?e.totalDuration()-e._totalTime:e._totalTime)/e._timeScale,this}if(e instanceof Array||e&&e.push&&h(e)){for(var s=e.length;--s>-1;)this.remove(e[s]);return this}return"string"==typeof e?this.removeLabel(e):this.kill(null,e)},p._remove=function(t,i){return e.prototype._remove.call(this,t,i),this._last?this._time>this.duration()&&(this._time=this._duration,this._totalTime=this._totalDuration):this._time=this._totalTime=this._duration=this._totalDuration=0,this},p.append=function(t,e){return this.add(t,this._parseTimeOrLabel(null,e,!0,t))},p.insert=p.insertMultiple=function(t,e,i,s){return this.add(t,e||0,i,s)},p.appendMultiple=function(t,e,i,s){return this.add(t,this._parseTimeOrLabel(null,e,!0,t),i,s)},p.addLabel=function(t,e){return this._labels[t]=this._parseTimeOrLabel(e),this},p.addPause=function(t,e,s,r){var a=i.delayedCall(0,c,s,r||this);return a.vars.onComplete=a.vars.onReverseComplete=e,a.data="isPause",this._hasPause=!0,this.add(a,t)},p.removeLabel=function(t){return delete this._labels[t],this},p.getLabelTime=function(t){return null!=this._labels[t]?this._labels[t]:-1},p._parseTimeOrLabel=function(e,i,s,r){var a,n;if(r instanceof t&&r.timeline===this)this.remove(r);else if(r&&(r instanceof Array||r.push&&h(r)))for(n=r.length;--n>-1;)r[n]instanceof t&&r[n].timeline===this&&this.remove(r[n]);if(a="number"!=typeof e||i?this.duration()>99999999999?this.recent().endTime(!1):this._duration:0,"string"==typeof i)return this._parseTimeOrLabel(i,s&&"number"==typeof e&&null==this._labels[i]?e-a:0,s);if(i=i||0,"string"!=typeof e||!isNaN(e)&&null==this._labels[e])null==e&&(e=a);else{if(-1===(n=e.indexOf("=")))return null==this._labels[e]?s?this._labels[e]=a+i:i:this._labels[e]+i;i=parseInt(e.charAt(n-1)+"1",10)*Number(e.substr(n+1)),e=n>1?this._parseTimeOrLabel(e.substr(0,n-1),0,s):a}return Number(e)+i},p.seek=function(t,e){return this.totalTime("number"==typeof t?t:this._parseTimeOrLabel(t),!1!==e)},p.stop=function(){return this.paused(!0)},p.gotoAndPlay=function(t,e){return this.play(t,e)},p.gotoAndStop=function(t,e){return this.pause(t,e)},p.render=function(t,e,i){this._gc&&this._enabled(!0,!1);var s,r,a,n,h,l,m,u,c=this._time,d=this._dirty?this.totalDuration():this._totalDuration,f=this._startTime,p=this._timeScale,T=this._paused;if(c!==this._time&&(t+=this._time-c),this._hasPause&&!this._forcingPlayhead&&!e){if(t>c)for(s=this._first;s&&s._startTime<=t&&!l;)s._duration||"isPause"!==s.data||s.ratio||0===s._startTime&&0===this._rawPrevTime||(l=s),s=s._next;else for(s=this._last;s&&s._startTime>=t&&!l;)s._duration||"isPause"===s.data&&s._rawPrevTime>0&&(l=s),s=s._prev;l&&(this._time=this._totalTime=t=l._startTime,u=this._startTime+(this._reversed?this._duration-t:t)/this._timeScale)}if(t>=d-1e-8&&t>=0)this._totalTime=this._time=d,this._reversed||this._hasPausedChild()||(r=!0,n="onComplete",h=!!this._timeline.autoRemoveChildren,0===this._duration&&(t<=0&&t>=-1e-8||this._rawPrevTime<0||1e-8===this._rawPrevTime)&&this._rawPrevTime!==t&&this._first&&(h=!0,this._rawPrevTime>1e-8&&(n="onReverseComplete"))),this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:1e-8,t=d+1e-4;else if(t<1e-8)if(this._totalTime=this._time=0,t>-1e-8&&(t=0),(0!==c||0===this._duration&&1e-8!==this._rawPrevTime&&(this._rawPrevTime>0||t<0&&this._rawPrevTime>=0))&&(n="onReverseComplete",r=this._reversed),t<0)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(h=r=!0,n="onReverseComplete"):this._rawPrevTime>=0&&this._first&&(h=!0),this._rawPrevTime=t;else{if(this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:1e-8,0===t&&r)for(s=this._first;s&&0===s._startTime;)s._duration||(r=!1),s=s._next;t=0,this._initted||(h=!0)}else this._totalTime=this._time=this._rawPrevTime=t;if(this._time!==c&&this._first||i||h||l){if(this._initted||(this._initted=!0),this._active||!this._paused&&this._time!==c&&t>0&&(this._active=!0),0===c&&this.vars.onStart&&(0===this._time&&this._duration||e||this._callback("onStart")),(m=this._time)>=c)for(s=this._first;s&&(a=s._next,m===this._time&&(!this._paused||T));)(s._active||s._startTime<=m&&!s._paused&&!s._gc)&&(l===s&&(this.pause(),this._pauseTime=u),s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=a;else for(s=this._last;s&&(a=s._prev,m===this._time&&(!this._paused||T));){if(s._active||s._startTime<=c&&!s._paused&&!s._gc){if(l===s){for(l=s._prev;l&&l.endTime()>this._time;)l.render(l._reversed?l.totalDuration()-(t-l._startTime)*l._timeScale:(t-l._startTime)*l._timeScale,e,i),l=l._prev;l=null,this.pause(),this._pauseTime=u}s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)}s=a}this._onUpdate&&(e||(_.length&&o(),this._callback("onUpdate"))),n&&(this._gc||f!==this._startTime&&p===this._timeScale||(0===this._time||d>=this.totalDuration())&&(r&&(_.length&&o(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[n]&&this._callback(n)))}},p._hasPausedChild=function(){for(var t=this._first;t;){if(t._paused||t instanceof s&&t._hasPausedChild())return!0;t=t._next}return!1},p.getChildren=function(t,e,s,r){r=r||-9999999999;for(var a=[],n=this._first,h=0;n;)n._startTime<r||(n instanceof i?!1!==e&&(a[h++]=n):(!1!==s&&(a[h++]=n),!1!==t&&(h=(a=a.concat(n.getChildren(!0,e,s))).length))),n=n._next;return a},p.getTweensOf=function(t,e){var s,r,a=this._gc,n=[],h=0;for(a&&this._enabled(!0,!0),r=(s=i.getTweensOf(t)).length;--r>-1;)(s[r].timeline===this||e&&this._contains(s[r]))&&(n[h++]=s[r]);return a&&this._enabled(!1,!0),n},p.recent=function(){return this._recent},p._contains=function(t){for(var e=t.timeline;e;){if(e===this)return!0;e=e.timeline}return!1},p.shiftChildren=function(t,e,i){i=i||0;for(var s,r=this._first,a=this._labels;r;)r._startTime>=i&&(r._startTime+=t),r=r._next;if(e)for(s in a)a[s]>=i&&(a[s]+=t);return this._uncache(!0)},p._kill=function(t,e){if(!t&&!e)return this._enabled(!1,!1);for(var i=e?this.getTweensOf(e):this.getChildren(!0,!0,!1),s=i.length,r=!1;--s>-1;)i[s]._kill(t,e)&&(r=!0);return r},p.clear=function(t){var e=this.getChildren(!1,!0,!0),i=e.length;for(this._time=this._totalTime=0;--i>-1;)e[i]._enabled(!1,!1);return!1!==t&&(this._labels={}),this._uncache(!0)},p.invalidate=function(){for(var e=this._first;e;)e.invalidate(),e=e._next;return t.prototype.invalidate.call(this)},p._enabled=function(t,i){if(t===this._gc)for(var s=this._first;s;)s._enabled(t,!0),s=s._next;return e.prototype._enabled.call(this,t,i)},p.totalTime=function(e,i,s){this._forcingPlayhead=!0;var r=t.prototype.totalTime.apply(this,arguments);return this._forcingPlayhead=!1,r},p.duration=function(t){return arguments.length?(0!==this.duration()&&0!==t&&this.timeScale(this._duration/t),this):(this._dirty&&this.totalDuration(),this._duration)},p.totalDuration=function(t){if(!arguments.length){if(this._dirty){for(var e,i,s=0,r=this,a=r._last,n=999999999999;a;)e=a._prev,a._dirty&&a.totalDuration(),a._startTime>n&&r._sortChildren&&!a._paused&&!r._calculatingDuration?(r._calculatingDuration=1,r.add(a,a._startTime-a._delay),r._calculatingDuration=0):n=a._startTime,a._startTime<0&&!a._paused&&(s-=a._startTime,r._timeline.smoothChildTiming&&(r._startTime+=a._startTime/r._timeScale,r._time-=a._startTime,r._totalTime-=a._startTime,r._rawPrevTime-=a._startTime),r.shiftChildren(-a._startTime,!1,-9999999999),n=0),(i=a._startTime+a._totalDuration/a._timeScale)>s&&(s=i),a=e;r._duration=r._totalDuration=s,r._dirty=!1}return this._totalDuration}return t&&this.totalDuration()?this.timeScale(this._totalDuration/t):this},p.paused=function(e){if(!1===e&&this._paused)for(var i=this._first;i;)i._startTime===this._time&&"isPause"===i.data&&(i._rawPrevTime=0),i=i._next;return t.prototype.paused.apply(this,arguments)},p.usesFrames=function(){for(var e=this._timeline;e._timeline;)e=e._timeline;return e===t._rootFramesTimeline},p.rawTime=function(t){return t&&(this._paused||this._repeat&&this.time()>0&&this.totalProgress()<1)?this._totalTime%(this._duration+this._repeatDelay):this._paused?this._totalTime:(this._timeline.rawTime(t)-this._startTime)*this._timeScale},s},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(t){"use strict";var e=function(){return(_gsScope.GreenSockGlobals||_gsScope).TimelineMax};"undefined"!=typeof module&&module.exports?(require("gsap/umd/TweenLite"),module.exports=e()):"function"==typeof define&&define.amd&&define(["gsap/umd/TweenLite"],e)}();