using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Trasnform : MonoBehaviour
{
    public float velV, velH;
    float unidadeV, unidadeH;
    // Start is called before the first frame update
    void Start()
    {
        velV = 40;
        velH = 100;
    }

    // Update is called once per frame
    void Update()
    {
        unidadeV = Input.GetAxis("Vertical") * Time.deltaTime * velV;
        unidadeH = Input.GetAxis("Horizontal") * Time.deltaTime * velH;
        transform.Translate(0, 0,unidadeV);
        transform.Rotate(0, unidadeH, 0);
    }
}
