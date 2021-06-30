<?php

declare(strict_types=1);

/**
 * @link https://flextype.org
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Flextype\Plugin\Codemirror;

/**
 * Add Blueprint block `Codemirror`
 */
flextype('registry')->set('plugins.blueprints.settings.blocks.Codemirror', 
                          flextype('registry')->get('plugins.codemirror.settings.blocks.Codemirror'));                

/**
 * Add Codemirror assets
 */ 
$codemirrorCSS[] = 'project/plugins/codemirror/blocks/Codemirror/dist/css/codemirror.min.css';
$codemirrorJS[]  = 'project/plugins/codemirror/blocks/Codemirror/dist/js/codemirror.min.js';

if (flextype('registry')->get('plugins.codemirror.settings.assetsLoadOnAdmin')) {
    flextype('registry')->set('assets.admin.js.codemirror', $codemirrorJS);
    flextype('registry')->set('assets.admin.css.codemirror', $codemirrorCSS);
}

if (flextype('registry')->get('plugins.codemirror.settings.assetsLoadOnSite')) {
    flextype('registry')->set('assets.site.js.codemirror', $codemirrorJS);
    flextype('registry')->set('assets.site.css.codemirror', $codemirrorCSS);
}