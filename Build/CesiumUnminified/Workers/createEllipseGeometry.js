/**
 * Cesium - https://github.com/CesiumGS/cesium
 *
 * Copyright 2011-2020 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/main/LICENSE.md for full licensing details.
 */

define(['./Matrix2-e0921750', './defaultValue-81eec7ed', './EllipseGeometry-6864f22f', './RuntimeError-8952249c', './ComponentDatatype-0f8fc942', './WebGLConstants-508b9636', './GeometryOffsetAttribute-2bff0974', './Transforms-1e6de713', './_commonjsHelpers-3aae1032-26891ab7', './combine-3c023bda', './EllipseGeometryLibrary-4f06caae', './GeometryAttribute-09cd5be5', './GeometryAttributes-32b29525', './GeometryInstance-4161c0b6', './GeometryPipeline-c1f01949', './AttributeCompression-a65cf082', './EncodedCartesian3-4e052475', './IndexDatatype-2261ba8d', './IntersectionTests-b9a7d403', './Plane-e7da25b6', './VertexFormat-7df34ea5'], (function (Matrix2, defaultValue, EllipseGeometry, RuntimeError, ComponentDatatype, WebGLConstants, GeometryOffsetAttribute, Transforms, _commonjsHelpers3aae1032, combine, EllipseGeometryLibrary, GeometryAttribute, GeometryAttributes, GeometryInstance, GeometryPipeline, AttributeCompression, EncodedCartesian3, IndexDatatype, IntersectionTests, Plane, VertexFormat) { 'use strict';

  function createEllipseGeometry(ellipseGeometry, offset) {
    if (defaultValue.defined(offset)) {
      ellipseGeometry = EllipseGeometry.EllipseGeometry.unpack(ellipseGeometry, offset);
    }
    ellipseGeometry._center = Matrix2.Cartesian3.clone(ellipseGeometry._center);
    ellipseGeometry._ellipsoid = Matrix2.Ellipsoid.clone(ellipseGeometry._ellipsoid);
    return EllipseGeometry.EllipseGeometry.createGeometry(ellipseGeometry);
  }

  return createEllipseGeometry;

}));
//# sourceMappingURL=createEllipseGeometry.js.map
