import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';

SizedBox logo(final double? width) {
  return SizedBox(
    width: width ?? 100.w,
    child: Image.asset(
      'src/images/LABlog_Letter_Cropped.png',
      fit: BoxFit.cover,
    ),
  );
}
