import 'package:flutter/material.dart';
import 'package:lablogfrontend/Content/InPageTexts.dart';
import 'package:lablogfrontend/constvalues.dart';
import 'package:lablogfrontend/widgets/Text.dart';

class TemporaryMainPage extends StatelessWidget {
  const TemporaryMainPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: Padding(
      padding: EdgeInsets.symmetric(vertical: 20, horizontal: 15),
      child: DecoratedBox(
          decoration: BoxDecoration(
              border: Border.all(color: Colors.black, width: 0.8),
              borderRadius: BorderRadius.all(Radius.circular(10))),
          child: Padding(
            padding: EdgeInsets.all(1),
            child: Row(
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                Container(
                    width: 200,
                    child: DecoratedBox(
                      decoration: BoxDecoration(
                          color: lightblue.withOpacity(0.4),
                          border: Border.all(color: lightblue.withOpacity(0)),
                          borderRadius: BorderRadius.only(
                              topRight: Radius.circular(10),
                              topLeft: Radius.circular(10),
                              bottomLeft: Radius.circular(10),
                              bottomRight: Radius.circular(10))),
                      child: Padding(
                        padding: EdgeInsets.all(10),
                        child: Column(children: [
                          Image.asset(
                              'src/images/LABlog_letter-removebg-preview.png')
                        ]),
                      ),
                    )),
                Expanded(
                    child: Padding(
                  padding: EdgeInsets.symmetric(vertical: 25),
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.start,
                    children: [
                      CommonText(
                          entrytext: PortugueseTempMainPageExplainingText)
                    ],
                  ),
                ))
              ],
            ),
          )),
    ));
  }
}
