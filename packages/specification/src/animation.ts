/**
 * 雪碧图/帧动画属性
 */
export interface TextureSheetAnimation {
  /**
     * 雪碧图行数
     */
  row: number,
  /**
     * 雪碧图列数
     */
  col: number,
  /**
     * 帧动画总帧数
     * 默认 row * col
     */
  total?: number,
  /**
     * 帧动画开关
     */
  animate: boolean,
}