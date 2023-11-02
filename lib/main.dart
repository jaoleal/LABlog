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
    Size EntryScreenSize = new Size(
        MediaQuery.of(context).size.width, MediaQuery.of(context).size.height);

    bool MobileSize = false;
    if (EntryScreenSize.height > EntryScreenSize.width)
      MobileSize = true;
    else
      MobileSize = false;
    return MaterialApp(
      title: 'LABlog',
      //theme: ThemeData(fontFamily: 'SourceCodePro'),
      home: MainPageViewer(
        MobileSize: MobileSize,
      ),
    );
  }
}
