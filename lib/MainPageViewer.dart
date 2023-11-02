import 'package:flutter/material.dart';
import 'package:lablogfrontend/widgets/CustomDrawer.dart';
import 'package:lablogfrontend/widgets/Header.dart';

class MainPageViewer extends StatelessWidget {
  final bool MobileSize;
  const MainPageViewer({super.key, required this.MobileSize});

  @override
  Widget build(BuildContext context) {
    return MobileSize
        ? const MainPageViewerMobileLayout()
        : const MainPageViewerPCLayout();
  }
}

class MainPageViewerPCLayout extends StatefulWidget {
  const MainPageViewerPCLayout({super.key});

  @override
  State<MainPageViewerPCLayout> createState() => _MainPageViewerPCLayoutState();
}

class _MainPageViewerPCLayoutState extends State<MainPageViewerPCLayout> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        drawer: CustomDrawer(),
        body: Container(
          child: Column(children: [
            Expanded(flex: 1, child: Header()),
            Expanded(
                flex: 15,
                child: Container(
                    color: Colors.blue, child: Center(child: Text('Content')))),
          ]),
        ));
  }
}

class MainPageViewerMobileLayout extends StatefulWidget {
  const MainPageViewerMobileLayout({super.key});

  @override
  State<MainPageViewerMobileLayout> createState() =>
      _MainPageViewerMobileLayoutState();
}

class _MainPageViewerMobileLayoutState
    extends State<MainPageViewerMobileLayout> {
  @override
  Widget build(BuildContext context) {
    return const Placeholder();
  }
}
