#include <iostream>
#include <string>

using namespace std;
int main()
{
    string One, Two, result;

    cin >> One >> Two;


    for(int a=2;a>=0;a--)
    {
        if(One[a] == Two[a]) continue;

        if(One[a] > Two[a]) result = One;
        else result = Two;
        break;
    }
    cout << result[2] << result[1] << result[0];

    return 0;
}