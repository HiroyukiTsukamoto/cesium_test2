/* This file is automatically rebuilt by the Cesium build process. */
define(['./defaultValue-94c3e563', './EllipsoidOutlineGeometry-ad6558a8', './GeometryOffsetAttribute-3e8c299c', './RuntimeError-c581ca93', './Transforms-20594677', './Matrix2-fc7e9822', './ComponentDatatype-4a60b8d6', './WebGLConstants-7dccdc96', './_commonjsHelpers-3aae1032-f55dc0c4', './combine-761d9c3f', './GeometryAttribute-111bf6c7', './GeometryAttributes-7df9bef6', './IndexDatatype-db156785'], (function (defaultValue, EllipsoidOutlineGeometry, GeometryOffsetAttribute, RuntimeError, Transforms, Matrix2, ComponentDatatype, WebGLConstants, _commonjsHelpers3aae1032, combine, GeometryAttribute, GeometryAttributes, IndexDatatype) { 'use strict';

  function createEllipsoidOutlineGeometry(ellipsoidGeometry, offset) {
    if (defaultValue.defined(ellipsoidGeometry.buffer)) {
      ellipsoidGeometry = EllipsoidOutlineGeometry.EllipsoidOutlineGeometry.unpack(
        ellipsoidGeometry,
        offset
      );
    }
    return EllipsoidOutlineGeometry.EllipsoidOutlineGeometry.createGeometry(ellipsoidGeometry);
  }

  return createEllipsoidOutlineGeometry;

}));
