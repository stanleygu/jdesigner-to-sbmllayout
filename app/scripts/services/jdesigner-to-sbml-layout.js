'use strict';

/**
 * @ngdoc service
 * @name jdesignerToSbmllayoutApp.jdesignerToSbmlLayout
 * @description
 * # jdesignerToSbmlLayout
 * Factory in the jdesignerToSbmllayoutApp.
 */
angular.module('jdesignerToSbmllayoutApp')
  .factory('jdesignerToSbmlLayout', function (sbmlLayoutTemplate) {
    // Service logic
    // ...
    var api = {
      convert: function(jdesigner) {
        var sbmlLayout = sbmlLayoutTemplate.getTemplate();
        convertSpecies(jdesigner, sbmlLayout);
        convertReactions(jdesigner, sbmlLayout);
        return sbmlLayout;
      }
    };

    function convertSpecies(jdesigner, sbmlLayout) {
      _.each(jdesigner.JDesignerFormat.listOfSpecies, function(s) {
        sbmlLayout.listOfLayouts.layout.listOfSpeciesGlyphs.speciesGlyph.push({
          _id: 'sGlyph' + s.id,
          _species: s.id,
          boundingBox: {
            dimensions: {
              _height: s.complex.h,
              _width: s.complex.w
            },
            position: {
              _x: s.position.x,
              _y: s.position.y
            }
          }
        });
        sbmlLayout.listOfLayouts.layout.annotation.listOfRenderStyles.renderStyle.listOfSpeciesStyles.speciesStyle.push({
          _id: 'sStyle' + s.id,
          _reference: 'sGlyph' + s.id,
          listOfShapes: {
            shape: {
              _kind: s.complex.subunit.shape,
              boundingBox: {
                dimensions: {
                  _height: s.complex.h,
                  _width: s.complex.w
                },
                position: {
                  _x: s.position.x,
                  _y: s.position.y
                }
              },
              edgeStyle: {
                _color: s.complex.subunit.outlineStyle.color,
                _style: s.complex.subunit.outlineStyle.style,
                _thickness: s.complex.subunit.outlineStyle.thickness
              },
              fillStyle: {
                _fillType: 'LinearGradient',
                _gradientStyle: 'Horizontal',
                _startColor: s.complex.subunit.gradient.startColor,
                _endColor: s.complex.subunit.gradient.endColor
              }
            }
          }
        });
      });
    }

    function convertReactions(jdesigner, sbmlLayout) {
      _.each(jdesigner.JDesignerFormat.listOfReactions, function(r) {

        var speciesReferenceGlyph = [];
        _.each(r.listOfReactants, function(reactant) {
          speciesReferenceGlyph.push({
            _id: 'SpeciesReference-' + r.id + reactant.id,
            _role: 'substrate',
            _speciesGlyph: 'sGlyph' + reactant.id,
            _speciesReference: reactant.id
          });
        });
        _.each(r.listOfProducts, function(product) {
          speciesReferenceGlyph.push({
            _id: 'SpeciesReference-' + r.id + product.id,
            _role: 'product',
            _speciesGlyph: 'sGlyph' + product.id,
            _speciesReference: product.id
          });
        });

        sbmlLayout.listOfLayouts.layout.listOfReactionGlyphs.reactionGlyph.push({
          _id: 'rGlyph' + r.id,
          _reaction: r.id,
          listOfSpeciesReferenceGlyphs: {
            speciesReferenceGlyph: speciesReferenceGlyph
          }
        });
      });
    }

    // Public API here
    return api;
  });
