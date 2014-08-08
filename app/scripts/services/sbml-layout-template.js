'use strict';

/**
 * @ngdoc service
 * @name jdesignerToSbmllayoutApp.sbmlLayoutTemplate
 * @description
 * # sbmlLayoutTemplate
 * Factory in the jdesignerToSbmllayoutApp.
 */
angular.module('jdesignerToSbmllayoutApp')
  .factory('sbmlLayoutTemplate', function () {
    // Service logic
    // ...

    var template = {
        listOfLayouts: {
          layout: {
            _id: 'JDesigner2SBMLLayout',
            _xlmns: 'http://projects.eml.org/bcb/sbml/level2',
            annotation: {
              listOfRenderInformation: {
                renderInformation: {
                  _id: 'JDesignerToSbmlLayoutRender',
                  listOfColorDefinitions: {
                    colorDefinition: []
                  },
                  listOfGradientDefinitions: {
                    gradientDefinition: []
                  },
                  listOfLineEndings: {
                    lineEnding: []
                  },
                  listOfStyles: {
                    style: []
                  }
                }
              },
              listOfRenderStyles: {
                renderStyle: {
                  _id: null,
                  fillStyle: {
                    _type: '',
                    _start: ''
                  },
                  listOfGroups: {},
                  listOfReactionStyles: {
                    reactionStyle: []
                  },
                  listOfSpeciesStyles: {
                    speciesStyle: []
                  },
                  listOfTextStyles: {
                    textStyle: []
                  }
                }
              }
            },
            dimensions: {
              _height: '',
              _width: ''
            },
            listOfReactionGlyphs: {
              reactionGlyph: []
            },
            listOfSpeciesGlyphs: {
              speciesGlyph: []
            },
            listOfTextGlyphs: {
              textGlyph: []
            }
          }
        }
      };

    // Public API here
    return {
      getTemplate: function () {
        return angular.copy(template);
      }
    };
  });
