import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:lablogfrontend/Content/InterLangTexts.dart';
import 'package:lablogfrontend/widgets/CustomDrawer.dart';
import 'package:lablogfrontend/widgets/Header.dart';

class MainPageViewer extends StatelessWidget {
  const MainPageViewer({super.key});
  @override
  Widget build(BuildContext context) {
    return MainPageViewerPCLayout();
  }
}

class MainPageViewerPCLayout extends StatefulWidget {
  MainPageViewerPCLayout({super.key});

  @override
  State<MainPageViewerPCLayout> createState() => _MainPageViewerPCLayoutState();
}

class _MainPageViewerPCLayoutState extends State<MainPageViewerPCLayout> {
  @override
  Widget build(BuildContext context) {
    final GlobalKey<ScaffoldState> _scaffoldKey = GlobalKey<ScaffoldState>();

    return Scaffold(
      key: _scaffoldKey,
      drawer: const CustomDrawer(),
      body: SizedBox(
        child: Column(children: [
          SizedBox(
            height: 100.h,
            child: Header(
              scaffoldKey: _scaffoldKey,
            ),
          ),
          SizedBox(
            height: 40.h,
          ),
          Container(
            height: 700.h,
            decoration: BoxDecoration(color: Colors.white.withAlpha(20)),
            padding: EdgeInsets.symmetric(vertical: 100.h),
            child: SingleChildScrollView(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: [
                  Text(textHolder["Introdução"]!.ptBr.text),
                  Text(textHolder["Texto do Beta"]!.ptBr.text)
                ],
              ),
            ),
          ),
          Container(
            padding: EdgeInsets.symmetric(vertical: 55.h),
            child: Text(
              textHolder["Contato"]!.ptBr.text,
              style: TextStyle(fontSize: 30.h),
            ),
          )
        ]),
      ),
    );
  }
}
