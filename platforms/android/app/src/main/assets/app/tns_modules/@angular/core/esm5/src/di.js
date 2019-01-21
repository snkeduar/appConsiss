/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * The `di` module provides dependency injection container services.
 */
export * from './di/metadata';
export { defineInjectable, defineInjector } from './di/defs';
export { forwardRef, resolveForwardRef } from './di/forward_ref';
export { Injectable } from './di/injectable';
export { INJECTOR, Injector } from './di/injector';
export { inject, InjectFlags } from './di/injector_compatibility';
export { ReflectiveInjector } from './di/reflective_injector';
export { createInjector } from './di/r3_injector';
export { ResolvedReflectiveFactory } from './di/reflective_provider';
export { ReflectiveKey } from './di/reflective_key';
export { InjectionToken } from './di/injection_token';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGkuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vIiwic291cmNlcyI6WyJwYWNrYWdlcy9jb3JlL3NyYy9kaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSDs7OztHQUlHO0FBRUgsY0FBYyxlQUFlLENBQUM7QUFDOUIsT0FBTyxFQUErQixnQkFBZ0IsRUFBRSxjQUFjLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFDekYsT0FBTyxFQUFDLFVBQVUsRUFBRSxpQkFBaUIsRUFBZSxNQUFNLGtCQUFrQixDQUFDO0FBQzdFLE9BQU8sRUFBQyxVQUFVLEVBQTBDLE1BQU0saUJBQWlCLENBQUM7QUFDcEYsT0FBTyxFQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUNoRSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUU1RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxFQUFDLHlCQUF5QixFQUE2QixNQUFNLDBCQUEwQixDQUFDO0FBQy9GLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUNsRCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sc0JBQXNCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8qKlxuICogQG1vZHVsZVxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGUgYGRpYCBtb2R1bGUgcHJvdmlkZXMgZGVwZW5kZW5jeSBpbmplY3Rpb24gY29udGFpbmVyIHNlcnZpY2VzLlxuICovXG5cbmV4cG9ydCAqIGZyb20gJy4vZGkvbWV0YWRhdGEnO1xuZXhwb3J0IHtJbmplY3RhYmxlVHlwZSwgSW5qZWN0b3JUeXBlLCBkZWZpbmVJbmplY3RhYmxlLCBkZWZpbmVJbmplY3Rvcn0gZnJvbSAnLi9kaS9kZWZzJztcbmV4cG9ydCB7Zm9yd2FyZFJlZiwgcmVzb2x2ZUZvcndhcmRSZWYsIEZvcndhcmRSZWZGbn0gZnJvbSAnLi9kaS9mb3J3YXJkX3JlZic7XG5leHBvcnQge0luamVjdGFibGUsIEluamVjdGFibGVEZWNvcmF0b3IsIEluamVjdGFibGVQcm92aWRlcn0gZnJvbSAnLi9kaS9pbmplY3RhYmxlJztcbmV4cG9ydCB7SU5KRUNUT1IsIEluamVjdG9yfSBmcm9tICcuL2RpL2luamVjdG9yJztcbmV4cG9ydCB7aW5qZWN0LCBJbmplY3RGbGFnc30gZnJvbSAnLi9kaS9pbmplY3Rvcl9jb21wYXRpYmlsaXR5JztcbmV4cG9ydCB7UmVmbGVjdGl2ZUluamVjdG9yfSBmcm9tICcuL2RpL3JlZmxlY3RpdmVfaW5qZWN0b3InO1xuZXhwb3J0IHtTdGF0aWNQcm92aWRlciwgVmFsdWVQcm92aWRlciwgQ29uc3RydWN0b3JTYW5zUHJvdmlkZXIsIEV4aXN0aW5nUHJvdmlkZXIsIEZhY3RvcnlQcm92aWRlciwgUHJvdmlkZXIsIFR5cGVQcm92aWRlciwgQ2xhc3NQcm92aWRlcn0gZnJvbSAnLi9kaS9wcm92aWRlcic7XG5leHBvcnQge2NyZWF0ZUluamVjdG9yfSBmcm9tICcuL2RpL3IzX2luamVjdG9yJztcbmV4cG9ydCB7UmVzb2x2ZWRSZWZsZWN0aXZlRmFjdG9yeSwgUmVzb2x2ZWRSZWZsZWN0aXZlUHJvdmlkZXJ9IGZyb20gJy4vZGkvcmVmbGVjdGl2ZV9wcm92aWRlcic7XG5leHBvcnQge1JlZmxlY3RpdmVLZXl9IGZyb20gJy4vZGkvcmVmbGVjdGl2ZV9rZXknO1xuZXhwb3J0IHtJbmplY3Rpb25Ub2tlbn0gZnJvbSAnLi9kaS9pbmplY3Rpb25fdG9rZW4nO1xuIl19