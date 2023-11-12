import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:flutter_tabler_icons/flutter_tabler_icons.dart';
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
  final GlobalKey<ScaffoldState> _scaffoldKey = GlobalKey<ScaffoldState>();
  @override
  State<MainPageViewerPCLayout> createState() => _MainPageViewerPCLayoutState();
}

class _MainPageViewerPCLayoutState extends State<MainPageViewerPCLayout> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        key: widget._scaffoldKey,
        drawer: CustomDrawer(),
        body: Stack(
          children: [
            Container(
              child: Column(children: [
                Container(
                  height: 100.h,
                  child: Header(),
                ),
                Expanded(
                  child: Container(
                      color: Colors.blue,
                      child: const Center(child: Text('Content'))),
                )
              ]),
            ),
            Positioned(
                top: 20.h,
                left: 20.w,
                child: IconButton(
                  onPressed: () {
                    widget._scaffoldKey.currentState!.openDrawer();
                  },
                  icon: const Icon(TablerIcons.menu_2),
                  iconSize: 35.h,
                ))
          ],
        ));
  }
}
