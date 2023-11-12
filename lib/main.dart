import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:lablogfrontend/Content/InPageTexts.dart';
import 'package:lablogfrontend/MainPageViewer.dart';
import 'package:lablogfrontend/pages/TempMainPage.dart';
import 'constvalues.dart';

void main() {
  runApp(const MainEntry());
}

class MainEntry extends StatelessWidget {
  const MainEntry({super.key});

  @override
  Widget build(BuildContext context) {
    ScreenUtil.init(
      context,
      designSize: TargetScreenRes,
      minTextAdapt: false,
    );
    return MaterialApp(
      title: 'LABlog',
      home: MainPageViewer(),
    );
  }
}
